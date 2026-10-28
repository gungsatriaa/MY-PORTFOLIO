# Gung Satria — Personal Portfolio

Website portofolio neubrutalism dengan React JavaScript dan Vite. Profil disusun dari enam tangkapan layar LinkedIn yang diberikan pemilik pada 28 Oktober 2026.

## Menjalankan

Node.js 22.12+ dan npm.

```sh
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal. Untuk build produksi:

```sh
npm run test
npm run lint
npm run build
npm run preview
```

Hasil build berada di `dist/`. Preview digunakan untuk memeriksa hasil build secara lokal, bukan sebagai server produksi.

## Fitur

- Hero personal, tentang, kegiatan, pengalaman, pendidikan, skill, penghargaan, sertifikasi, dan kontak LinkedIn.
- Navigasi responsif dengan dukungan keyboard dan Escape pada menu mobile.
- Filter kegiatan Semua / Website / AI; kartu bergambar dengan judul, deskripsi langsung, dan link website opsional.
- Animasi entrance, reveal scroll, filter, gambar, hover, dan press melalui CSS + Intersection Observer.
- Galeri React lazy/Suspense mulai dimuat saat halaman dirender, disertai Error Boundary; crawler tidak perlu scroll untuk melihat proyek.
- Gambar lazy dengan skeleton, dimensi tetap, dan fallback saat gagal dimuat.
- Reduced motion, skip link, fokus yang terlihat, dan status hasil filter.
- SVG lokal, Space Grotesk 700 untuk heading/wordmark/running text, dan font sistem untuk body; tidak ada dependency runtime tambahan di luar React/React DOM.

Efek scroll menyerupai AOS tanpa memasang paket AOS. Skeleton tidak memakai penundaan buatan.

## Dokumentasi

- [PRD](docs/PRD.md): kebutuhan produk, inventaris fakta, acceptance criteria, arsitektur, budget performa, dan batas cakupan.
- [Style guide](docs/STYLE.md): warna, tipografi, layout, komponen, motion, responsive, dan panduan aksesibilitas.
- [Pratinjau desktop](docs/preview-desktop.png).

## Mengubah konten

Edit `src/data/portfolio.js` untuk profil, pengalaman, pendidikan, penghargaan, sertifikasi, dan kegiatan. Edit `src/App.jsx` untuk copy/layout utama, `src/components/` untuk perilaku area tertentu, `src/index.css` untuk token global, dan `src/App.css` untuk komponen/layout.

Ilustrasi kegiatan ada di `public/images/`. Gambar tersebut bukan screenshot produk asli. Jika menggantinya, pertahankan rasio 3:2, gunakan gambar teroptimasi, dan sesuaikan alt text. Saat mengganti kategori kegiatan, perbarui kategori filter dan ekspektasi tes. Metadata dikelola melalui `scripts/seo.mjs`; domain dapat diatur dengan SITE_URL.

Foto profil tersedia; beberapa proyek sudah memiliki URL website/repository. Email, CV, dan URL credential belum tersedia. Link tersebut tidak dibuat-buat. Tanggal penghargaan yang tidak terlihat pada sumber dibiarkan kosong.

## Verifikasi 28 Oktober 2026

- `npm run test`: 8 tes lolos, meliputi filter, ID, kategori, keberadaan gambar, kontak, data yang belum tersedia, serta navigasi tanpa hash dan pemindahan fokus.
- `npm run lint`: lolos tanpa peringatan.
- `npm run build`: lolos; JavaScript awal sekitar 74,7 KB gzip, chunk galeri 0,90 KB gzip, CSS 4,56 KB gzip.
- HTTP lokal: 200; tidak ada error console pada sesi browser desktop yang diperiksa.
- Browser: filter Semua/Website/AI menghasilkan 3/2/1, detail kegiatan dan disclosure enam sertifikasi terbuka, seluruh gambar galeri berhasil dimuat.
- Viewport iframe 320/390/768/1024/1440px: lebar dokumen tidak melebihi viewport; bukan pengujian perangkat fisik.
- Tampilan hero desktop, hero mobile, galeri, penghargaan, dan sertifikasi ditinjau lewat screenshot.
- Menu mobile diuji buka/tutup dan Escape; fokus kembali ke tombol.

Belum dijalankan: Lighthouse produksi, profil perangkat nyata, screen reader, emulasi reduced motion, simulasi jaringan lambat, dan injeksi error chunk/gambar. Penanganan reduced motion/error tersedia dalam kode; tidak mengklaim hasil uji yang belum dilakukan. Skor performa dan Core Web Vitals di PRD merupakan target.

## Publikasi

Belum dipublikasikan. Deploy isi `dist/` pada static hosting dengan HTTPS setelah domain dipilih. Canonical, og:url, URL gambar share, dan sitemap dihasilkan ketika domain produksi tersedia; periksa konfigurasi cache pada hosting. Build sudah melakukan prerender statis tanpa dependency tambahan; profil dan seluruh kartu proyek tersedia di HTML awal.

## Proporsi halaman dan navigasi tanpa hash

Hanya hero wajib pas satu layar, dikurangi tinggi header. Section lainnya mengikuti isi dengan padding proporsional. Kontak dibuat lebih ringkas dengan heading maksimal 64px dan tinggi alami. Detail yang dibuka tetap boleh menambah tinggi.

Running text kuning muncul setelah hero, bergerak kontinu dengan CSS dan dua kelompok identik. Teks tetap bergerak saat hover, tanpa tombol jeda/putar; reduced motion menonaktifkan animasi. Tidak ada dependency animasi tambahan.

Navigasi internal biasa menggulir dan memindahkan fokus tanpa hash atau history entry. Fragment URL lama dibersihkan saat mount; klik termodifikasi tetap native. Header, CTA, logo, footer, dan skip link memakai handler bersama di `src/utils/navigation.js`.

Verifikasi running text terbaru: assert browser memastikan posisi track tetap berubah saat hover dan tidak ada tombol kontrol. Hero desktop 1280×720 tetap 634px + header 86px, kontak turun menjadi sekitar 408px. Hero mobile 320×568 dan 390×844 tetap pas satu layar tanpa overflow horizontal. Screenshot kontak terbaru: [preview-contact.png](docs/preview-contact.png).

Revisi running text: bidang kuning penuh, border ink 3px, tipografi tebal 20–30px, dan separator asterisk kobalt. Gerakan kontinu tetap aktif saat hover, tanpa tombol kontrol dan tanpa state React. Reduced motion tetap dihormati.

## Modal reusable dan gambar penghargaan

`src/components/Modal.jsx` menerima `open`, `onClose`, `title`, dan `children`. Komponen memakai native dialog: Escape, fokus di dalam modal, pemulihan fokus ke pemicu, tombol tutup, klik backdrop, serta penguncian scroll halaman. Tidak memerlukan library tambahan. Render satu instance dan kontrol visibilitas lewat state:

```jsx
const [open, setOpen] = useState(false)

<button onClick={() => setOpen(true)}>Buka</button>
<Modal open={open} onClose={() => setOpen(false)} title="Pratinjau">
  <p>Isi modal dapat berupa gambar atau konten React lain.</p>
</Modal>
```

Ikon buka sudah terpasang pada tiga penghargaan dan enam sertifikasi. Gambar akan diisi sendiri oleh pemilik. Simpan file, misalnya `public/images/certificates/beasiswa-apjii.webp`, lalu ubah field pada item terkait di `src/data/portfolio.js`:

```js
image: '/images/certificates/beasiswa-apjii.webp',
```

Field `image: null` menampilkan “Gambar belum ditambahkan.” URL gambar yang gagal dimuat memakai fallback LazyImage. Gambar baru dimount ketika modal dibuka dan ditampilkan dengan object-fit contain agar tidak terpotong. Key gambar mengikuti URL sehingga status loading/error direset ketika gambar berubah.

Verifikasi browser: modal kosong, gambar uji lokal termuat, Escape/backdrop menutup, fokus kembali ke ikon, dan scroll pulih. Aset uji tidak dipasang sebagai sertifikat asli atau disimpan ke data produksi.

Tipografi display memakai Space Grotesk 700 Latin yang di-self-host (sekitar 13 KB) dengan font-display swap dan preload. Body tetap Trebuchet MS. Sumber aset: @fontsource/space-grotesk 5.3.0; lisensi ada di `public/fonts/space-grotesk-LICENSE.txt`. Tidak menambahkan dependency NPM untuk font.

Verifikasi font: Space Grotesk berhasil dimuat pada viewport 320/390/768/1280px, hero tetap setinggi viewport dikurangi header, dan tidak ada horizontal overflow. Lint/build lolos; font menambah sekitar 13 KB transfer terpisah dari bundle JavaScript.

## Mengisi foto dan link kartu proyek

Style kartu tetap seperti semula: gambar di bagian atas, lalu judul dan deskripsi pada bidang putih. Tanpa Baca cerita, tag, atau label tipe kegiatan. Ubah item pada `src/data/portfolio.js`, misalnya:

```js
image: '/images/projects/nama-proyek.webp',
imageAlt: 'Tampilan halaman utama proyek',
website: 'https://domain-proyek.com',
```

Simpan gambar di `public/images/projects/`. Saat website null, link tidak ditampilkan. Gambar awal masih berupa ilustrasi; foto bisa diganti sendiri tanpa mengubah komponen. Lazy loading, skeleton, dan fallback gambar tetap aktif.

## Tombol website dan GitHub

Setiap proyek memiliki dua field opsional di `src/data/portfolio.js`:

```js
website: 'https://domain-proyek.com',
github: 'https://github.com/username/repository',
```

`website` menampilkan tombol kuning Buka website, `github` menampilkan tombol GitHub dengan ikon SVG. Masing-masing berdiri sendiri: isi salah satu atau keduanya. Gunakan null untuk menyembunyikan tombol. Keduanya membuka tab baru dengan noopener/noreferrer; baris tombol membungkus pada layar kecil. Tidak ada library ikon tambahan.

Instagram pemilik: @gungsatriaaa0, https://www.instagram.com/gungsatriaaa0/. Tautan disimpan dalam profile.instagram dan ditampilkan sebagai tombol dengan ikon SVG di bagian kontak, berdampingan dengan LinkedIn. Tombol membuka tab baru dengan noopener/noreferrer dan membungkus pada layar kecil. Footer tetap hanya teks copyright. Username berasal langsung dari pemilik; tidak mengambil konten Instagram secara otomatis.

## Copywriting dan SEO produksi

Copy ditujukan untuk calon klien dan perekrut: fokus web development serta otomasi n8n, pengalaman faktual, peran tiap proyek, dan CTA diskusi. Nama penghargaan, periode, link proyek milik pemilik, dan footer dipertahankan. Tidak menambahkan jumlah klien, hasil bisnis, testimoni, atau pengalaman rekaan.

`npm run build` menjalankan Vite lalu `scripts/prerender.mjs`. Output `dist/index.html` berisi profil dan tiga proyek, bukan hanya root kosong. React mengambil alih interaksi melalui createRoot di browser; tidak ada server runtime baru. Galeri tetap code-split, tetapi mulai dimuat tanpa menunggu scroll. Gambar tetap lazy-loaded. Perubahan data perlu build ulang sebelum deploy.

Metadata terpusat di `scripts/seo.mjs`: title/description, author, Open Graph, Twitter card, robots, dan JSON-LD ProfilePage/Person. Gambar berbagi tersedia di `public/og-image-hero.jpg` (1200×630). Root HTML memakai lang=id dan satu h1.

Untuk Vercel: gunakan Build Command `npm run build` dan Output Directory `dist`. URL utama dibaca dari `SITE_URL`, lalu fallback `VERCEL_PROJECT_PRODUCTION_URL`. Aktifkan akses system environment variables pada proyek Vercel jika memakai fallback. Jangan menggunakan URL deployment acak sebagai canonical. File `.env.example` memberi contoh nama variabel. Domain belum ditentukan sehingga build lokal tidak membuat canonical/URL share absolut/sitemap rekaan.

Dengan domain, build menghasilkan canonical, og:url, URL share image absolut, dan sitemap.xml; robots.txt merujuk sitemap. Preview Vercel memakai noindex,follow dan tidak menerbitkan sitemap. robots.txt tetap mengizinkan crawl agar crawler dapat membaca noindex. `SITE_URL` menerima URL root HTTP/HTTPS tanpa path/query/fragment/kredensial. Sesudah mengganti domain, lakukan build ulang.

Panduan publikasi dan pemeriksaan: [docs/SEO.md](docs/SEO.md).

Verifikasi SEO produksi: raw HTML memuat nama lengkap dan ketiga proyek, JSON-LD dapat di-parse, canonical/sitemap/robots/social image konsisten pada domain uji, dan preview Vercel noindex tanpa sitemap. Browser produksi memuat galeri tanpa scroll, filter AI tetap berfungsi, dan console tidak menunjukkan error. Viewport 320×568, 390×844, 768×1024, serta desktop 1280×720 tidak overflow; hero tetap satu layar. Iframe tanpa JavaScript tetap menampilkan profil dan tiga proyek. Domain uji dan halaman QA telah dibersihkan dari output akhir.

## Foto hero

Monogram GS diganti aset asli `src/assets/gungsatria.webp` (1079×1457, sekitar 77 KB). Kartu hero diperlebar; area foto desktop memakai tinggi clamp(180px, 39svh, 360px). Foto diperbesar ke 130% dari tinggi frame dan dicrop secara visual di bawah pinggang, dengan posisi center top, alt nama lengkap, loading eager, dan fetchPriority high. Ukuran hero tetap mengikuti viewport dikurangi header. Kartu selalu tampil pada mobile dengan area foto lebih besar; hero boleh memanjang pada layar pendek agar konten tetap terbaca.

Vite menghasilkan build manifest untuk merujuk aset ber-hash; prerender mengganti URL sumber dengan URL produksi agar foto tidak 404 pada HTML statis. Build mengassert tidak ada URL /src/assets/ yang tertinggal. Jangan mengubah URL hash manual.

Verifikasi foto hero: aset produksi termuat, console bersih, hero tepat satu viewport dikurangi header pada 320×568, 390×844, 768×1024, 1280×600, dan 1280×720; tidak ada horizontal overflow. Lint, 8 tes, dan build/prerender lolos.

Revisi crop dan komposisi hero: foto asli tidak diubah; tampilan diperbesar ke tinggi 130% dan dipotong oleh overflow hidden di bagian bawah sehingga celana tidak terlihat. Posisi center top menjaga wajah/rambut. Bidang kuning melingkar dengan border/shadow berada di belakang foto; stiker </> dan n8n melayang dengan transform CSS, asterisk berputar 20 detik. Dekorasi aria-hidden dan mengikuti reduced motion. Tidak menambah library atau state animasi.

Mobile: kartu diperlebar hingga hampir lebar container, area foto clamp(210px, 27svh, 290px), heading minimum 36px, serta CTA/spacing dirapikan. Aturan lama menyembunyikan kartu pada tinggi ≤740px dihapus. Hero tetap minimum satu layar, tetapi boleh memanjang pada mobile sempit/pendek supaya foto tetap besar dan teks tidak dipotong. Ini menggantikan ketentuan terdahulu yang memaksa hero mobile pas satu layar pada semua ukuran.

Verifikasi komposisi terbaru: crop tidak memperlihatkan celana, desktop 1280×720 tetap satu layar, mobile 390×844 juga pas satu layar dengan area foto 228px. Pada 320×568 hero memanjang menjadi 816px dengan area foto 210px. Viewport 320/390/430/768px tidak mengalami overflow horizontal dan kartu foto selalu terlihat. Screenshot mobile: [preview-hero-mobile.png](docs/preview-hero-mobile.png). Lint, 8 tes, dan build/prerender lolos; console produksi bersih.


Pembaruan fokus profesional (28 Oktober 2026): hero dan Tentang menonjolkan Web Developer dan Software Developer. PHP, Laravel, dan Flutter ditambahkan ke keahlian; AI/n8n tetap menjadi keahlian pendukung dan riwayat penghargaan, bukan fokus utama. Running text, label hero, CTA kontak, metadata SEO, serta preview sosial mengikuti fokus baru ini. Ketentuan ini menggantikan copy fokus otomasi pada revisi sebelumnya.


## Deploy VPS aaPanel — gungsatria.com

Panduan ini menggantikan rencana hosting Vercel pada catatan sebelumnya. Website berupa file statis; Nginx/Apache aaPanel melayani folder `dist`. Node/npm hanya dipakai untuk build, tanpa PM2, `npm run dev`, atau `vite preview` sebagai server produksi.

Buat konfigurasi lokal sekali di VPS (file environment tidak disertakan di Git):

```bash
cp .env.example .env.production
```

Domain SEO pada `.env.production`:

```dotenv
SITE_URL=https://gungsatria.com
```

Nilai ini publik, bukan secret. Vite dan prerender membacanya saat `npm run build`; mengganti domain perlu build ulang. `.env.local` atau environment shell dapat menimpa nilai ini, jadi pastikan tidak ada domain lama pada VPS. Tidak perlu database, API key, atau environment runtime untuk fitur saat ini.

Setup sekali:

1. Arahkan DNS A `gungsatria.com` ke IPv4 VPS. Jika memakai AAAA, pastikan IPv6 VPS benar. Untuk `www`, tambahkan record yang sesuai lalu redirect ke domain utama.
2. Di aaPanel, buat website statis untuk domain tersebut dan aktifkan sertifikat SSL serta redirect HTTPS. Atur homepage `index.html`.
3. Pasang Git dan Node/npm yang sesuai Vite: Node 22.12+ atau Node 20.19+. Pastikan tersedia di terminal pengguna yang menjalankan deploy.
4. Clone repository pada folder khusus source di VPS, misalnya `/www/projects/my-portfolio`. SSH key GitHub perlu tersedia pada VPS jika memakai URL SSH; key di laptop tidak otomatis tersedia di VPS.
5. Atur document root aaPanel ke `/www/projects/my-portfolio/dist` (sesuaikan dengan lokasi clone), bukan folder source. Jalankan build pertama agar folder tersebut tersedia.

Setelah seluruh perubahan deployment di-commit dan di-push dari laptop, jalankan di terminal VPS:

```bash
cd /www/projects/my-portfolio
./deploy.sh
```

Script menjalankan `git pull --ff-only origin main`, `npm ci --include=dev`, lint, tes, dan build. Hasilnya langsung dilayani dari document root `dist`; tidak ada upload ke Vercel atau restart proses Node. Script hanya menerima branch `main` dan working tree bersih. Script tidak membuat commit/push/stash dan tidak menghapus perubahan source lokal.

Setelah deploy, cek `https://gungsatria.com`, `/robots.txt`, `/sitemap.xml`, dan `/og-image-hero.jpg`. Navigasi portfolio tetap di satu halaman, sehingga tidak membutuhkan rewrite React Router. File environment berada di folder source, bukan folder publik `dist`.

Validasi lokal: sintaks Bash, 11 tes, lint, build, canonical/social image/sitemap untuk gungsatria.com lolos. DNS, SSL, permission web server, dan konfigurasi aaPanel belum diperiksa di VPS.

Referensi: [Vite static deployment](https://vite.dev/guide/static-deploy), [Vite environment](https://vite.dev/guide/env-and-mode), [aaPanel website](https://www.aapanel.com/docs/SubaaPanel/Website.html).
