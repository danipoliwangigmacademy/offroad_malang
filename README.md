# offroad.web.id — Website statis (Bootstrap 5, tanpa database)

Situs statis bergaya BootstrapMade: HTML + CSS + JS murni, tanpa PHP/database.
Semua pustaka (Bootstrap 5.3, Bootstrap Icons, Swiper) dan font (Chivo, Space Grotesk)
sudah ada di `assets/`, jadi situs tidak bergantung pada CDN.

## Halaman
| File | Isi |
|---|---|
| `index.html` | Landing page (hero, tentang, nilai tambah, paket, keunggulan, testimoni, FAQ, CTA) |
| `tentang-kami.html` | Profil, visi-misi, armada, tim, legalitas |
| `paket.html` | Katalog + filter, rundown, estimator anggaran, protokol K3, FAQ |
| `galeri.html` | Video, galeri foto (filter + lightbox), fasilitas dokumentasi |
| `blog.html` / `blog/artikel.html` | Daftar artikel + 1 contoh artikel (salin `blog/artikel.html` untuk artikel baru) |
| `kontak.html` | Saluran kontak, formulir reservasi, basecamp, alur reservasi, FAQ |

## Yang WAJIB diganti sebelum go-live
Seluruh nama, angka, dan klaim di situs ini adalah **contoh dari desain** dan belum diverifikasi.
1. ~~Nomor WhatsApp~~ — sudah diset ke `0822-1122-1909` (https://wa.me/6282211221909) di semua file `.html` dan `assets/js/main.js`. Ganti lagi jika nomor berubah.
2. ~~Alamat & wilayah~~ — sudah difokuskan ke Kota Batu, Malang, Jawa Timur (basecamp utama: Jl. Raya Selecta No. 1, Songgoriti). **Verifikasi alamat asli** sebelum go-live — alamat, koordinat (`geo.position`/`ICBM` di setiap `<head>`, serta `geo` di JSON-LD) masih perkiraan berdasarkan pusat Kota Batu.
3. **Email**: `info@offroad.web.id`, `b2b@offroad.web.id` — masih domain contoh, sesuaikan bila perlu.
4. **Legalitas** (`tentang-kami.html`): isi bagian bertanda `[isi ...]` (nama PT, NIB, CHSE, asuransi).
5. **Klaim & angka**: 500+ acara, 12+ tahun, 150+ armada, 98,8%, 4,96/5, 15.000+ foto, harga paket, dll.
6. **Testimoni, nama tim, logo klien**: kartu klien masih berupa label sektor. Ganti dengan logo/ulasan asli yang sudah diizinkan.
7. **Sosial media**: tautan Instagram/YouTube/TikTok di footer.
8. **Video galeri**: isi `data-video="ID_YOUTUBE"` pada tombol video di `galeri.html`.
9. **Rute & lokasi trek**: nama trek (Coban Rondo, Selecta, Sumber Brantas–Cangar, Payung, Coban Talun, Kasembon, Bromo–Probolinggo) sudah disesuaikan untuk area Batu–Malang tapi belum diverifikasi ke kondisi lapangan aktual (jarak tempuh, status akses, dan legalitas jalur).

## SEO / AEO / GEO yang sudah disesuaikan
- Title, meta description, dan Open Graph di semua halaman kini menyertakan "Batu, Malang".
- Meta `geo.region` (ID-JI), `geo.placename`, `geo.position`, dan `ICBM` ditambahkan di setiap `<head>`.
- JSON-LD `TravelAgency` (NAP + `geo` + `areaServed`: Kota Batu, Malang, Malang Raya) ada di semua halaman.
- `index.html` menambah skema `FAQPage` (termasuk pertanyaan lokasi trek) untuk answer-engine optimization.
- `blog/artikel.html` tetap punya skema `BreadcrumbList`, `Article`, dan `FAQPage`.
- Verifikasi ulang koordinat GPS basecamp asli dan perbarui `geo.position`/`ICBM`/JSON-LD `geo` setelah alamat final dikonfirmasi.

## Gambar
Foto memakai tautan dari ekspor desain (Google-hosted) dan **bisa kedaluwarsa**.
Ganti dengan foto sendiri: taruh di `assets/img/` lalu ubah atribut `src` pada tag `<img>`.
Jika gambar gagal dimuat, kotak gambar otomatis menampilkan latar gradien + pola kontur, dan hero menampilkan ilustrasi 4x4 (`assets/img/hero-4x4.svg`).

## Formulir (tanpa backend)
- Formulir reservasi (`kontak.html`) menyusun pesan lalu membuka WhatsApp.
- Newsletter & whitepaper (`blog.html`) membuka aplikasi email pengguna (`mailto:`).
Jika kelak butuh penyimpanan data, sambungkan ke layanan formulir pihak ketiga atau backend sendiri.

## Deploy
Unggah seluruh isi folder ke root hosting (cPanel/Netlify/GitHub Pages/Nginx). Jalankan lokal:
`python3 -m http.server 8000` lalu buka http://localhost:8000
Setelah domain aktif, sesuaikan `sitemap.xml` dan tag `canonical` bila perlu.

## Struktur
```
assets/css/main.css   tema (palet: #D27B1D #873F17 #2B2022 #2E3C46 #558097 #9BC6DB #8EA6A8)
assets/js/main.js     filter, estimator, slider, form -> WhatsApp, modal
assets/img/           logo, favicon, ilustrasi hero
assets/vendor/        bootstrap, bootstrap-icons, swiper
assets/fonts/         Chivo & Space Grotesk (woff2)
```
