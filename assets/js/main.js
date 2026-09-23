/*==============================================================
  offroad.web.id — main.js (vanilla JS, tanpa database/backend)
  Semua formulir diarahkan ke WhatsApp / email klien.
==============================================================*/
(function () {
  'use strict';

  /* ---- KONFIGURASI: ganti sebelum go-live ------------------- */
  var SITE = {
    wa: '6281234567890',          // nomor WhatsApp CS (format internasional tanpa +)
    email: 'info@offroad.web.id'
  };
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var rupiah = function (n) { return 'Rp ' + new Intl.NumberFormat('id-ID').format(Math.round(n)); };
  var waLink = function (text) { return 'https://wa.me/' + SITE.wa + '?text=' + encodeURIComponent(text); };

  /* ---- Header: bayangan saat scroll ------------------------- */
  var header = $('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 8); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Tombol Kembali ke Atas (Back to Top) ------------------ */
  var backToTop = $('#backToTop');
  if (backToTop) {
    var toggleBackToTop = function () {
      backToTop.classList.toggle('show', window.scrollY > 280);
    };
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---- Tutup menu mobile setelah klik tautan ---------------- */
  $$('#mainNav .nav-link').forEach(function (a) {
    a.addEventListener('click', function () {
      var el = $('#mainNav');
      if (el && el.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(el).hide();
      }
    });
  });

  /* ---- Hitung naik angka (sekali, saat terlihat) ------------ */
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length;
        var suffix = el.dataset.suffix || '', t0 = performance.now(), dur = 1400;
        (function tick(t) {
          var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
          el.textContent = (end * e).toFixed(dec).replace('.', ',') + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: .4 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* ---- Slider testimoni (Swiper) ---------------------------- */
  if (window.Swiper && $('.testi-swiper')) {
    new Swiper('.testi-swiper', {
      loop: false, spaceBetween: 20, slidesPerView: 1, autoHeight: false,
      pagination: { el: '.testi-swiper .swiper-pagination', clickable: true },
      navigation: { nextEl: '.testi-swiper .swiper-button-next', prevEl: '.testi-swiper .swiper-button-prev' },
      a11y: { prevSlideMessage: 'Ulasan sebelumnya', nextSlideMessage: 'Ulasan berikutnya' },
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }
    });
  }

  /* ---- Filter kartu (paket / galeri / blog) ------------------ */
  function initFilter(cfg) {
    var tabs = $$(cfg.tabs); if (!tabs.length) return;
    var items = $$(cfg.items), empty = $(cfg.empty);
    var state = { cat: 'all', q: '', loc: '', dur: '', grade: '' };
    function apply() {
      var shown = 0;
      items.forEach(function (it) {
        var d = it.dataset, hay = (it.textContent + ' ' + (d.loc || '')).toLowerCase();
        var ok = (state.cat === 'all' || (d.cat || '').split(' ').indexOf(state.cat) > -1) &&
                 (!state.q || hay.indexOf(state.q) > -1) &&
                 (!state.loc || (d.loc || '').split(' ').indexOf(state.loc) > -1) &&
                 (!state.dur || d.dur === state.dur) &&
                 (!state.grade || d.grade === state.grade);
        it.classList.toggle('is-hidden', !ok);
        var wrap = it.closest('[data-item-wrap]'); if (wrap) wrap.classList.toggle('d-none', !ok);
        if (ok) shown++;
      });
      if (empty) empty.classList.toggle('show', shown === 0);
      var counter = $(cfg.counter); if (counter) counter.textContent = shown;
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
        t.classList.add('active'); t.setAttribute('aria-pressed', 'true');
        state.cat = t.dataset.filter || 'all'; apply();
      });
    });
    var s = $(cfg.search); if (s) s.addEventListener('input', function () { state.q = s.value.trim().toLowerCase(); apply(); });
    [['loc', cfg.loc], ['dur', cfg.dur], ['grade', cfg.grade]].forEach(function (p) {
      var el = p[1] && $(p[1]); if (el) el.addEventListener('change', function () { state[p[0]] = el.value; apply(); });
    });
    apply();
  }
  initFilter({ tabs: '#pkgTabs .tab-pill', items: '.pkg-card[data-cat]', empty: '#pkgEmpty', counter: '#pkgCount',
               search: '#routeSearch', loc: '#fLoc', dur: '#fDur', grade: '#fGrade' });
  initFilter({ tabs: '#galTabs .tab-pill', items: '.g-card[data-cat]', empty: '#galEmpty', counter: '#galCount', loc: '#gLoc' });
  initFilter({ tabs: '#blogTabs .tab-pill', items: '.post-card[data-cat]', empty: '#blogEmpty', counter: '#blogCount', search: '#blogSearch' });

  /* ---- Pencarian blog: cegah reload -------------------------- */
  var bf = $('#blogSearchForm'); if (bf) bf.addEventListener('submit', function (e) { e.preventDefault(); });

  /* ---- Estimator anggaran (halaman Paket) -------------------- */
  var range = $('#paxRange');
  if (range) {
    var calc = function () {
      var pax = +range.value, base = +($('input[name=calcPackage]:checked') || {}).value || 0, add = 0;
      $$('.addon:checked').forEach(function (c) { add += +c.value; });
      var per = base + add, label = ($('input[name=calcPackage]:checked') || {}).dataset;
      $('#paxValue').textContent = pax;
      $('#costPerPax').textContent = rupiah(per);
      $('#totalCost').textContent = rupiah(per * pax);
      $('#armadaCount').textContent = Math.ceil(pax / 4) + ' unit armada 4x4 (4 peserta/unit)';
      var msg = 'Halo Admin offroad.web.id, saya ingin proposal outbound.\n' +
        'Paket: ' + (label ? label.name : '-') + '\nPeserta: ' + pax + ' orang\nEstimasi: ' + rupiah(per) + '/pax (total ' + rupiah(per * pax) + ')' +
        ($$('.addon:checked').length ? '\nAdd-on: ' + $$('.addon:checked').map(function (c) { return c.dataset.name; }).join(', ') : '');
      $('#estWa').href = waLink(msg);
    };
    $$('#paxRange, input[name=calcPackage], .addon').forEach(function (el) { el.addEventListener('input', calc); el.addEventListener('change', calc); });
    calc();
  }

  /* ---- Form reservasi -> WhatsApp (tanpa database) ------------ */
  var rf = $('#expeditionForm');
  if (rf) {
    rf.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!rf.checkValidity()) { rf.reportValidity(); return; }
      var v = function (n) { var el = rf.elements[n]; return el ? el.value.trim() : ''; };
      var kegiatan = ($('input[name=kegiatan]:checked', rf) || {}).nextElementSibling;
      var addons = $$('input[name=addon]:checked', rf).map(function (c) { return c.nextElementSibling.textContent.trim(); });
      var text = 'Halo offroad.web.id, saya ingin meminta proposal & RAB.\n\n' +
        'Nama PIC: ' + v('nama') + '\nInstansi/Komunitas: ' + v('instansi') + '\nWhatsApp: ' + v('wa') + '\nEmail: ' + v('email') +
        '\nKegiatan: ' + (kegiatan ? kegiatan.textContent.trim() : '-') +
        '\nEstimasi peserta: ' + v('pax') + '\nDestinasi trek: ' + rf.elements.trek.selectedOptions[0].text +
        '\nRencana tanggal: ' + (v('tanggal') || 'belum ditentukan') +
        '\nFasilitas tambahan: ' + (addons.length ? addons.join(', ') : '-') +
        '\nCatatan: ' + (v('catatan') || '-');
      var ok = $('#formSuccess'); if (ok) { ok.classList.add('show'); ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
      window.open(waLink(text), '_blank', 'noopener');
    });
  }

  /* ---- Formulir email sederhana (newsletter / whitepaper) ----- */
  $$('form[data-mailto]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(f), body = [];
      data.forEach(function (val, key) { body.push(key + ': ' + val); });
      window.location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(f.dataset.mailto) +
        '&body=' + encodeURIComponent(body.join('\n'));
      var note = $('.form-note', f.parentNode); if (note) note.textContent = 'Aplikasi email Anda akan terbuka. Kirim pesan tersebut untuk menyelesaikan permintaan.';
    });
  });

  /* ---- Video modal (Galeri) ----------------------------------- */
  var vm = $('#videoModal');
  if (vm && window.bootstrap) {
    var vbody = $('.video-body', vm);
    vm.addEventListener('show.bs.modal', function (ev) {
      var b = ev.relatedTarget, id = b && b.dataset.video, title = (b && b.dataset.title) || '';
      $('.modal-title', vm).textContent = title;
      vbody.innerHTML = id
        ? '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="' + title.replace(/"/g, '') + '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'
        : '<div class="text-center p-4"><i class="bi bi-film display-5 text-amber"></i><p class="mt-3 mb-0">Video ini belum dipasang. Isi atribut <code>data-video</code> pada tombol dengan ID video YouTube.</p></div>';
    });
    vm.addEventListener('hidden.bs.modal', function () { vbody.innerHTML = ''; });
  }

  /* ---- Lightbox foto (Galeri) --------------------------------- */
  var lb = $('#photoModal');
  if (lb && window.bootstrap) {
    lb.addEventListener('show.bs.modal', function (ev) {
      var card = ev.relatedTarget && ev.relatedTarget.closest('.g-card'); if (!card) return;
      var img = $('img', card), holder = $('.lb-media', lb);
      holder.innerHTML = '';
      if (img && !img.classList.contains('is-broken')) {
        var c = document.createElement('img'); c.src = img.src; c.alt = img.alt; c.referrerPolicy = 'no-referrer';
        c.style.cssText = 'width:100%;height:100%;object-fit:cover'; holder.appendChild(c);
      }
      $('.lb-title', lb).textContent = $('h3', card).textContent;
      $('.lb-meta', lb).textContent = $('.g-meta', card) ? $('.g-meta', card).textContent.replace(/\s+/g, ' ').trim() : '';
    });
  }

})();
