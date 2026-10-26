

```markdown
# TASK INSTRUCTION: SEO, AEO & GEO OVERHAUL FOR OFFROAD.WEB.ID

## 1. PROJECT CONTEXT & ROLE
You are an Expert Technical SEO Engineer, Knowledge Graph Architect, and Frontend Developer.
You are working inside the static web project directory: `D:\laragon\www\offroad-web-id`.

- **Brand Name:** Offroad Malang (`offroad.web.id`)
- **Primary Target Keyword:** Paket Offroad Malang, Offroad Batu Malang, Paket Offroad Coban Talun, Outbound Batu Malang.
- **Main Competitor to Beat:** `https://offroadcobantalun.com/`
- **Tech Stack:** Pure HTML5, Bootstrap 5 (`assets/vendor/bootstrap`), Bootstrap Icons, Swiper.js, custom CSS (`assets/css/main.css`), and vanilla JS (`assets/js/main.js`). Dark theme (`data-bs-theme="dark"`).

## 2. CRITICAL RULES FOR THE AI AGENT
1. **Use Native File Tools:** Always read existing HTML files (`index.html`, `paket-outbound.html`, `tentang-kami.html`, `galeri.html`, `blog.html`, `kontak.html`, `sitemap.xml`) before editing.
2. **Preserve Visual & UI Styling:** DO NOT break or remove existing custom CSS classes (`hero`, `chip-amber`, `display-hero`, `lead-ox`, `btn-ox`, `pkg-card`, `val-card`, `b2b-card`, `ox-accordion`, etc.). All new HTML elements must use matching Bootstrap 5 dark-theme and custom `main.css` classes.
3. **No AI Slop Copywriting:** Write in natural, authoritative, persuasive Indonesian (B2B Corporate & B2C Family friendly). Avoid colons (`:`) in main titles/headings and avoid robotic filler words.
4. **Zero Broken Assets:** Only reference image files that actually exist inside `assets/img/` and its subdirectories (`blog/`, `galeri/`, `paket-outbound/`, `tentang-kami/`).

---

## 3. STEP-BY-STEP EXECUTION PLAN

### TASK 1: Fix Critical Entity & Trust Leaks Across All HTML Files
Read `index.html`, `tentang-kami.html`, `paket-outbound.html`, `galeri.html`, `blog.html`, and `kontak.html`, then execute the following fixes:

1. **Remove Sitewide PBN/Link-Farm Footprint:**
   - Locate `<div class="footer-network">...</div>` inside `<footer class="site-footer">` across all HTML files.
   - **Remove the entire `<div class="footer-network">` block** completely to protect the domain from Google SpamBrain sitewide link dilution.

2. **Unify NAP (Name, Address, Phone) Consistency (100% Match):**
   - Standardize the physical address everywhere (JSON-LD Schema, Footer, and `kontak.html`) to:
     - **Display Text & Schema:** `Jl. Raya Selecta No. 1, Songgoriti, Kec. Batu, Kota Batu, Jawa Timur 65323`
     - **Phone / WhatsApp:** `+6282211221909` / `0822-1122-1909`

3. **Remove Deprecated Meta Keywords:**
   - Remove `<meta name="keywords" ...>` from `<head>` in all HTML files.

---

### TASK 2: Upgrade `index.html` Head, Meta & Connected Knowledge Graph Schema (GEO Optimization)
Edit `index.html` `<head>` section:

1. **Update `<title>` and `<meta name="description">`:**
   ```html
   <title>Paket Offroad Malang &amp; Outbound Kota Batu Resmi | Coban Talun, Selecta &amp; Cangar — offroad.web.id</title>
   <meta name="description" content="Provider resmi Paket Offroad Malang &amp; Outbound Kota Batu. Sewa Jeep 4x4 (Land Cruiser, Jimny, Willys) rute Coban Talun, Coban Putri, Selecta, Cangar, corporate gathering &amp; camping. Mulai Rp 350.000/pax atau Rp 550.000/jeep.">

```

*(Also update `og:title` and `og:description` to match).*

2. **Replace the JSON-LD Scripts in `index.html` with a Unified `@graph` Knowledge Graph:**
Replace existing JSON-LD scripts in `index.html` with a rich `@graph` schema containing:
* `["TravelAgency", "LocalBusiness"]` with `@id: "https://offroad.web.id/#organization"`, `priceRange: "Rp350.000 - Rp850.000"`, `areaServed` covering `Kota Batu`, `Malang`, `Coban Talun`, `Coban Putri`, `Coban Rondo`, `Sumber Brantas Cangar`, `Bukit Jengkoang`, and `Lembah Ayu`.
* `AggregateRating` (`ratingValue: "4.96"`, `reviewCount: "480"`).
* `hasOfferCatalog` listing both **Per-Pax Corporate Packages** (Rp 350.000 - Rp 850.000/pax) AND **Per-Jeep Retail Packages** (Short Rp 550.000, Medium Rp 750.000, Long Rp 850.000/jeep).
* `FAQPage` schema expanded to include questions about Coban Talun routes, per-jeep pricing vs per-pax pricing, and vehicle types (Land Cruiser FJ40, Willys, Jimny, Taft).



---

### TASK 3: Inject Competitor-Crushing Micro-Entities & AEO Pricing Table into `index.html`

1. **Enhance Hero Section (`#hero-title` & Lead Paragraph):**
* Update `<h1>` to:
```html
<h1 id="hero-title" class="display-hero mt-4 mb-4 rise" style="--i:1">Paket <span class="text-amber">Offroad Malang</span> &amp; Outbound Kota Batu Resmi</h1>

```


* Update the hero lead paragraph (`p.lead-ox`) to naturally mention: *Corporate gathering, outbound training, family camping, dan sewa Jeep 4x4 (Land Cruiser Hardtop, Jimny, Willys, Taft) melintasi jalur terbaik Coban Talun, Coban Putri, Selecta, hingga Cangar.*


2. **Add an AEO Comparison Table & Micro-Route Matrix inside `#katalog-paket`:**
* Right below the 4 package cards (`row g-4`) inside `<section class="section" id="katalog-paket">`, add a well-styled dark comparison table (`<div class="table-responsive mt-5">`) designed specifically to capture **Google Featured Snippets (AEO)** and **AI Overview citations (GEO)**.
* The table MUST include a clear heading: `<h3>Daftar Harga Sewa Jeep Offroad Coban Talun Batu Malang 2026 (Per Jeep &amp; Paket Rombongan)</h3>`
* Columns required:
1. **Pilihan Jalur & Rute Offroad**
2. **Titik Lintasan Utama (Micro-Entities)**
3. **Durasi & Karakter Medan**
4. **Harga Sewa Retail (Per Jeep 4 Pax)**
5. **Harga Paket All-In Corporate (Per Pax)**


* Rows required:
* **Jalur Pendek (Short Track):** *Coban Talun, Kebun Apel, Hutan Pinus, Sungai Wonorejo, Coban Putri* | Durasi 2–3 Jam | **Rp 550.000 / Jeep** | **Rp 350.000 / Pax**
* **Jalur Sedang (Medium Track):** *Coban Talun, Bukit Jengkoang, Lembah Ayu, Kaki Langit, Coban Rondo* | Durasi 3–4 Jam | **Rp 750.000 / Jeep** | **Rp 450.000 / Pax**
* **Jalur Panjang (Long Track):** *Sumber Brantas Cangar, Coban Manan, Hutan Konservasi Arjuno, Pura Giri Arjuno* | Durasi 5–6 Jam | **Rp 850.000 / Jeep** | **Rp 550.000 / Pax**
* **Paket Kombo Offroad + ATV / Rafting / Outbound:** *Coban Talun / Pujon Kasembon* | Durasi 1 Hari Penuh | **Custom** | **Rp 550.000 / Pax**




3. **Upgrade FAQ Section (`#faqHome`) in `index.html`:**
* Update Question #5 (`#faqHome-4`) and add 1 new question (`#faqHome-5`) so both the HTML accordion and JSON-LD `FAQPage` explicitly answer the micro-entities (Coban Talun, Coban Putri, Cangar, dll.) dan perbandingan harga per jeep vs per pax.



---

### TASK 4: Optimize `paket-outbound.html` as a High-Converting Commercial Hub

Read `paket-outbound.html` and enhance it:

1. Ensure it integrates the complete breakdown of **Corporate Outbound**, **Team Building**, **Family Camping / Glamping**, **ATV Adventure**, and **Jeep Offroad Batu Malang**.
2. Add a clear section detailing **Spesifikasi Armada 4x4 (Toyota Land Cruiser FJ40 Hardtop, Jeep Willys Klasik, Suzuki Jimny/Katana, Daihatsu Taft GT)** and **SOP Keselamatan**.
3. Ensure proper `Product` / `OfferCatalog` and `BreadcrumbList` JSON-LD schema is placed in `<head>`.

---

### TASK 5: Fix Blog Architecture & Internal Linking Silo

Currently, in `index.html` and `blog.html`, all blog post cards link to a single generic file `blog/artikel.html`.

1. Read `blog/artikel.html` and `blog.html`.
2. Create 3 dedicated, SEO-optimized static article files inside the `/blog/` directory based on existing blog images in `assets/img/blog/`:
* `blog/panduan-corporate-gathering-offroad-batu.html`
* `blog/teknik-winching-recovery-offroad-lumpur.html`
* `blog/rute-offroad-cangar-vs-coban-talun-batu.html` (Thoroughly comparing **Coban Talun, Bukit Jengkoang, Coban Putri, Coban Rondo, and Cangar**).


3. Each blog article must include proper `<title>`, `<meta name="description">`, `<link rel="canonical">`, `Article` + `BreadcrumbList` JSON-LD Schema, and contextual internal links pointing back to `../index.html#katalog-paket` and `../paket-outbound.html`.
4. Update the `href` links in `index.html` (`#blog` section) and `blog.html` to point to these specific article URLs.
5. Update `sitemap.xml` so all pages and the new `/blog/*.html` URLs are listed with accurate `<loc>` and `<lastmod>` (`2026-10-26`).

---

## 4. VERIFICATION CHECKLIST

* [x] No `<div class="footer-network">` exists in any HTML file.
* [x] Address and phone number in JSON-LD and `<footer>` match 100% across all pages.
* [x] `index.html` contains the new AEO Pricing & Route Comparison Table (`<table>`).
* [x] Micro-entities (*Coban Talun, Coban Putri, Coban Manan, Bukit Jengkoang, Lembah Ayu, Kaki Langit, Cangar, Coban Rondo, Willys, Jimny, Land Cruiser*) are naturally integrated.
* [x] JSON-LD syntax in all files is valid JSON without trailing commas.
* [x] `sitemap.xml` is updated and valid.