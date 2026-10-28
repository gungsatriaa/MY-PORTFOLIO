# Product Requirements Document — Gung Satria Portfolio

Versi 1.2 · 28 Oktober 2026 · Status: implementasi lokal, belum dipublikasikan.

## 1. Ringkasan produk

Website portofolio personal Anak Agung Gede Satria Putra Wibawa, dengan nama tampilan Gung Satria. Website memperkenalkan identitas profesional, menampilkan kegiatan pengembangan web dan AI, merangkum perjalanan pendidikan dan pekerjaan, serta mengarahkan calon kolaborator ke LinkedIn. Arah visual neubrutalism: tipografi tebal, warna kontras, garis hitam, dan bayangan tanpa blur. Interaksi terasa hidup melalui animasi ringan yang tetap dapat diakses.

Produk berupa single-page React JavaScript dengan Vite. Konten lokal, tanpa login, backend, CMS, atau permintaan profil LinkedIn saat runtime. Bahasa utama Indonesia; nama jabatan dan sertifikat mengikuti sumber.

## 2. Tujuan dan ukuran keberhasilan

| Tujuan | Kriteria keberhasilan |
| --- | --- |
| Identitas segera dipahami | Nama, fokus Web Development / AI Automation, status mahasiswa, dan Ubud terlihat pada awal halaman |
| Kredibilitas terbentuk dari fakta | Tiga pengalaman, dua pendidikan, tiga penghargaan, dan enam sertifikasi sesuai sumber |
| Karya mudah dijelajahi | Filter Semua / Website / AI berfungsi, jumlah hasil diumumkan, detail bisa dibuka dengan keyboard |
| Kontak jelas | CTA LinkedIn aktif dengan URL yang diberikan pemilik |
| Pengalaman ringan | Tidak menambahkan dependensi runtime selain React dan React DOM; gambar SVG lokal; galeri dipecah menjadi chunk tersendiri |
| Aksesibilitas | Navigasi keyboard, focus visible, skip link, reduced motion, struktur heading, dan alternatif gambar |
| Bisa dipelihara | Data utama di satu modul; perubahan konten tidak membutuhkan perubahan logika UI |

Ukuran kunjungan atau konversi belum dikumpulkan. Tidak ada analytics atau tracker.

## 3. Pengguna dan kebutuhan

- **Perekrut:** memahami bidang, pengalaman, pendidikan, dan pencapaian tanpa membaca profil panjang.
- **Calon klien/kolaborator:** melihat jenis kegiatan yang dikerjakan, peran pribadi, dan cara menghubungi.
- **Rekan dan komunitas:** mengenal perjalanan belajar dan minat pengembangan web serta AI.
- **Pemilik:** memperbarui konten lewat file data sederhana dan menjaga tampilan personal.

Alur utama: beranda → tentang → karya/kegiatan → perjalanan/pencapaian → kontak LinkedIn. Semua bagian tetap dapat diakses melalui navigasi section tanpa fragment pada URL; tidak ada navigasi yang mewajibkan urutan tertentu.

## 4. Sumber informasi dan batas akurasi

Sumber utama: enam tangkapan layar LinkedIn yang diberikan langsung oleh pemilik pada 28 Oktober 2026. Profil: <https://www.linkedin.com/in/gungsatriaa/>. Akses publik mengarah ke authwall, sehingga informasi ditranskripsi dari gambar, bukan hasil pengambilan profil otomatis.

| Sumber | Informasi yang dipakai |
| --- | --- |
| Gambar 1 — ringkasan profil | Nama lengkap; Software Engineering Student, Web Developer, AI Automation N8N; Ubud, Bali; Universitas Telkom |
| Gambar 2 — pengalaman | Digisite, SMKN 1 Mas Ubud, Arcom Mediaksa; jabatan, periode, ringkasan tanggung jawab |
| Gambar 3 — pendidikan | Universitas Telkom dan SMK Negeri 1 Mas Ubud; bidang studi dan periode |
| Gambar 4 — penghargaan | APJII Bali, AI Application Competition OSII Week 2025, SMK AI Innovation Challenge |
| Gambar 5 — sertifikasi | Public Speaking, Academic Achiever, Prokope Entrepreneurship |
| Gambar 6 — sertifikasi | Gamelab HTML & CSS, JavaScript & jQuery, Bootstrap & Sass; tanggal terbit/kedaluwarsa |

Aturan konten:

1. “Gung Satria” adalah nama tampilan; nama lengkap ada pada bagian Tentang dan metadata.
2. Ringkasan berbahasa Indonesia merupakan parafrasa fakta pada sumber, bukan kutipan atau testimoni.
3. “Sekarang” mencerminkan kondisi pada tanggal sumber; tidak menghitung lama pengalaman secara otomatis.
4. Tanggal Juara 2 SMK AI Innovation Challenge tidak terlihat: simpan `null` dan jangan tampilkan tanggal rekaan.
5. Nama universitas mengikuti “Universitas Telkom” pada gambar. Jangan menambahkan gelar, IPK, atau tahun kelulusan yang belum ada.
6. Keahlian diambil dari headline dan sertifikat; tidak menggunakan persentase penguasaan.
7. Gambar tidak disalin utuh ke website karena memuat UI akun dan pihak lain. Hero memakai foto asli dari aset terpisah milik pemilik; kartu kegiatan memakai ilustrasi SVG.
8. Tidak mempublikasikan jumlah koneksi, notifikasi akun, rekomendasi orang lain, atau elemen privat yang terlihat pada screenshot.
9. Tidak membuat tautan demo, repository, credential, email, CV, maupun nomor telepon yang belum diberikan.

## 5. Inventaris konten

### Profil

- Nama lengkap: Anak Agung Gede Satria Putra Wibawa.
- Nama tampilan: Gung Satria.
- Headline sumber: Software Engineering Student | Web Developer | AI Automation N8N.
- Lokasi umum: Ubud, Bali, Indonesia.
- Kontak utama: LinkedIn.

### Pengalaman

| Jabatan | Organisasi | Periode | Ringkasan |
| --- | --- | --- | --- |
| Founder CEO | PT. Digisite Kreatif Indonesia | Mei 2026 – sekarang | Mendirikan dan memimpin perusahaan solusi website dan perangkat lunak |
| Pengembang Web | SMK Negeri 1 Mas Ubud | Februari 2026 – sekarang | Mengelola proyek website dari analisis kebutuhan, perencanaan, sampai implementasi |
| Intern | PT. Teknologi Arcom Mediaksa | Agustus 2025 – Februari 2026 | Pengalaman praktik pengembangan software dan teknologi web |

### Pendidikan

| Institusi | Bidang | Periode |
| --- | --- | --- |
| Universitas Telkom | Software Engineering | September 2026 – sekarang |
| SMK Negeri 1 Mas Ubud | Rekayasa Perangkat Lunak | Juli 2023 – Juli 2026 |

### Penghargaan

- Beasiswa APJII Bali — Asosiasi Penyelenggara Jasa Internet Indonesia, Mei 2026.
- Juara 1 AI Application Competition OSII Week 2025 — Universitas Katolik Darma Cendika, November 2025.
- Juara 2 SMK AI Innovation Challenge — Haraka Communication bersama Direktorat SMK; tanggal belum tersedia.

### Sertifikasi dan pelatihan

| Nama | Penerbit | Terbit | Berlaku hingga |
| --- | --- | --- | --- |
| National Basic Public Speaking Learning | Speak-Up Academy Hub | September 2026 | Tidak tercantum |
| Academic Achiever Student 2026 | SMK Negeri 1 Mas Ubud | Maret 2026 | Tidak tercantum |
| Prokope Entrepreneurship Track | Prokope (Agency & Akademy) | Maret 2026 | Tidak tercantum |
| Gamelab Certificate HTML & CSS | Gamelab Indonesia | April 2024 | April 2027 |
| Gamelab Certificate JavaScript & jQuery | Gamelab Indonesia | November 2024 | November 2027 |
| Gamelabs Certificate Bootstrap & Sass | Gamelab Indonesia | Agustus 2024 | Agustus 2027 |

Ejaan “Gamelabs” pada entri terakhir mengikuti tangkapan layar. Tanggal ditampilkan sebagai data sumber; tidak ada badge status aktif yang berpotensi menjadi keliru setelah kedaluwarsa.

## 6. Cakupan fitur dan acceptance criteria

| ID | Fitur | Persyaratan penerimaan |
| --- | --- | --- |
| F01 | Header dan navigasi | Logo GS, navigasi Tentang/Karya/Perjalanan/Kontak; klik biasa menggulir dan memfokuskan section tanpa fragment URL; header sticky; target tidak tertutup header |
| F02 | Navigasi mobile | Menu dapat dibuka/ditutup; `aria-expanded`, `aria-controls`; link menutup menu; Escape menutup dan mengembalikan fokus |
| F03 | Hero | Satu h1, intro faktual, CTA proyek/kontak, foto asli pemilik; tidak menunda hero dengan lazy loading |
| F04 | Tentang | Nama lengkap, fokus, pendidikan aktif, perusahaan, lokasi umum, dan link LinkedIn |
| F05 | Galeri | Tiga kegiatan: website sekolah, inisiatif Digisite, AI Application Competition; dibedakan dari klaim produk lengkap |
| F06 | Filter | Semua = 3, Website = 2, AI = 1; tombol `aria-pressed`; perubahan hasil diumumkan lewat `role=status` |
| F07 | Kartu proyek | Area foto/ilustrasi di atas; judul dan deskripsi langsung terlihat; link website hanya saat URL tersedia; tanpa disclosure atau tag |
| F08 | Perjalanan | Tiga pengalaman dalam urutan terbaru; dua pendidikan; tujuh skill/fokus tanpa skor kemampuan |
| F09 | Pencapaian | Tiga penghargaan dan disclosure enam sertifikasi; tanggal yang tidak ada tidak dirender |
| F10 | Kontak | CTA LinkedIn membuka tab baru dengan `noopener noreferrer` dan pemberitahuan screen reader |
| F11 | Animasi scroll | Reveal satu kali; Intersection Observer; observer dibersihkan; tanpa scroll listener per frame |
| F12 | Galeri yang dapat diindeks | HTML produksi memuat semua proyek; chunk Projects mulai dimuat saat render browser tanpa menunggu scroll; gambar tetap lazy |
| F13 | Skeleton | Mengikuti proporsi kartu/toolbar saat chunk belum tersedia; tidak menambahkan waktu tunggu buatan |
| F14 | Lazy image | `loading=lazy`, `decoding=async`, dimensi tetap, skeleton saat load, pesan jika gambar gagal |
| F15 | Error recovery | Gagal import galeri ditangani Error Boundary; tombol muat ulang tersedia; bagian website lain tetap bisa dibaca |
| F16 | Footer | Nama, tahun saat aplikasi dimuat, dan anchor kembali ke atas |

## 7. Arsitektur dan praktik React

```text
src/
  main.jsx                   StrictMode dan createRoot
  App.jsx                    Komposisi halaman, state menu
  index.css                  Reset, token, reduced motion, aksesibilitas
  App.css                    Layout, komponen, animasi, breakpoint
  data/portfolio.js          Profil, pengalaman, pendidikan, award, sertifikat, kegiatan
  hooks/useInView.js         Observer satu kali dan cleanup
  components/
    Reveal.jsx               Wrapper reveal scroll
    ProjectGallery.jsx       Observer, lazy, Suspense, Error Boundary, skeleton
    Projects.jsx             Filter dan kartu kegiatan; chunk terpisah
    LazyImage.jsx            Load/error state gambar
    Journey.jsx              Pengalaman, pendidikan, skill, pencapaian
  utils/navigation.js        Handler klik internal tanpa hash; fokus tetap aksesibel
public/images/               SVG ilustrasi lokal
public/favicon.svg           Identitas GS abstrak
tests/portfolio.test.js     Tes built-in Node (tanpa library tambahan)
```

- Komponen fungsi; class hanya untuk Error Boundary React.
- State lokal hanya untuk menu, filter, visibility satu kali, dan status gambar. Tidak memakai global store.
- Data list memiliki key stabil; filter tidak memutasi data asli.
- `lazy()` dideklarasikan di level modul; `Suspense` membungkus area galeri saja.
- Effect digunakan untuk sinkronisasi observer dengan browser; cleanup wajib agar aman dalam StrictMode.
- CSS untuk motion; tidak ada interval, animasi posisi pada scroll, atau library animasi tambahan.
- Tidak memakai `memo`, `useMemo`, atau `useCallback` tanpa bukti kebutuhan dari profiling.
- Tidak menggunakan `dangerouslySetInnerHTML`, DOM injection, atau fetch ke LinkedIn.
- Pembaruan proyek dimulai dari data. Bila aset `src` berubah dalam satu instance LazyImage, remount dengan key aset atau reset status; saat ini setiap kartu memakai key ID dan gambar statis.

## 8. Performa dan target kualitas

Target berikut adalah budget dan sasaran, bukan klaim hasil audit perangkat nyata:

| Metrik | Target |
| --- | --- |
| Initial JavaScript | Maksimum 90 KB gzip termasuk React/React DOM |
| CSS produksi total | Maksimum 12 KB gzip |
| Gambar awal | Foto WebP lokal sekitar 77 KB dan font Latin sekitar 13 KB |
| Ilustrasi kartu | SVG lokal, masing-masing < 10 KB mentah |
| LCP mobile | ≤ 2,5 detik pada pengujian produksi yang representatif |
| CLS | ≤ 0,1; idealnya mendekati 0 |
| INP | ≤ 200 ms pada data lapangan setelah tersedia |
| Lighthouse mobile | Sasaran Performance ≥ 90, Accessibility ≥ 95 |

Pengukuran Core Web Vitals dan Lighthouse perlu dilakukan setelah deployment pada domain sebenarnya. Code splitting kecil dipertahankan untuk memenuhi kebutuhan lazy gallery; evaluasi ulang bila overhead request lebih besar daripada manfaat saat konten berkembang. Skeleton hanya muncul selama proses asli. Font memakai stack sistem agar tidak ada request font eksternal. Gambar memiliki rasio tetap; skeleton galeri mendekati layout final, tetapi tinggi teks dan disclosure dapat memengaruhi perpindahan layout.

## 9. Aksesibilitas dan responsive

- Sasaran WCAG 2.2 AA; belum merupakan sertifikasi audit.
- `lang=id`, landmark header/nav/main/footer, satu h1, urutan heading logis.
- Skip link terlihat saat fokus; fokus biru, pada bidang biru memakai kuning.
- Semua kontrol minimal sekitar 44px; summary memiliki area klik yang nyaman.
- Filter memakai button dan `aria-pressed`, bukan tab karena tidak mengimplementasikan pola tab panel.
- Hasil filter melalui live status; skeleton dekoratif `aria-hidden`, status pemuatan hanya satu.
- Dekorasi visual disembunyikan dari teknologi asistif. Monogram mempunyai nama aksesibel.
- Reduced motion mematikan animasi, transisi, shimmer/pulse, dan smooth scrolling; konten reveal tetap terlihat.
- Breakpoint 1000px untuk kompresi ruang dan 760px untuk layout satu kolom/menu mobile.
- Target lebar 320, 390, 768, 1024, dan 1440px; tidak boleh ada horizontal overflow.
- Menu menggunakan pola disclosure, bukan modal: tidak melakukan focus trap.

## 10. SEO, keamanan, dan privasi

- Title, description, bahasa, tema browser, favicon, dan Open Graph dasar.
- Domain final belum tersedia: canonical URL, `og:url`, gambar share, dan sitemap ditunda sampai URL deployment diketahui.
- Build melakukan prerender statis untuk profil dan semua proyek. Crawler tanpa JavaScript mendapatkan konten HTML; interaksi browser diaktifkan React tanpa server runtime tambahan.
- Seluruh aset dari origin lokal; tanpa tracker, cookie, embed LinkedIn, atau server penyimpan pesan.
- React meng-escape konten teks; link eksternal hanya dari data yang dikelola pemilik.
- Tidak menyimpan token/API key di frontend. Jangan menambahkan secret ke variabel `VITE_*`.
- Hosting produksi harus memakai HTTPS, kompresi, cache untuk asset ber-hash, dan fallback SPA jika nanti menambah route. Header keamanan ditetapkan pada hosting yang dipilih.

## 11. Verifikasi dan definition of done

Perintah lokal:

```sh
npm install
npm run test
npm run lint
npm run build
npm run preview
```

Checklist penerimaan:

- [ ] Nama, periode, instansi, dan penghargaan cocok dengan screenshot pemilik.
- [ ] Gambar jelas berlabel ilustrasi dan tidak diklaim sebagai screenshot produk.
- [ ] Filter mengembalikan 3/2/1 dan detail dapat dibuka dengan Enter/Space.
- [ ] Anchor dan menu mobile berfungsi, Escape mengembalikan fokus.
- [ ] Galeri muncul ketika mendekati viewport dan tidak menahan hero.
- [ ] Slow network memperlihatkan skeleton tanpa timeout buatan.
- [ ] Kegagalan chunk/gambar menunjukkan fallback yang bisa dipahami.
- [ ] Reduced motion, navigasi keyboard, focus, dan teks tidak tersembunyi.
- [ ] Tidak ada overflow pada ukuran sasaran dan zoom 200%.
- [ ] Tidak ada error console dan lint/test/build lolos.
- [ ] Ukuran bundle aktual dicatat; audit Lighthouse produksi dilakukan sebelum mengklaim skor.

Catatan hasil pemeriksaan aktual ada di README; checklist ini juga menjadi panduan regresi saat konten berubah.

## 12. Di luar cakupan dan langkah berikutnya

Belum termasuk: CMS, backend kontak, dark mode, multi-bahasa, blog, routing, CV download, analytics, dan integrasi API LinkedIn. Hindari penambahan sampai ada kebutuhan nyata.

Data lanjutan yang diperlukan untuk memperkaya portofolio:

1. Foto profil asli sudah tersedia pada src/assets/gungsatria.webp.
2. Nama/URL demo dan repository proyek; stack, kontribusi pribadi, metrik yang dapat dibuktikan.
3. Nama aplikasi kompetisi, rekan tim/peran, dan tanggal penghargaan yang belum tersedia.
4. Tautan credential resmi jika ingin verifikasi sertifikat langsung.
5. Email profesional atau CV yang memang ingin dipublikasikan.
6. Domain dan pilihan hosting untuk metadata final, SEO, caching, dan audit produksi.

Pengiriman awal tetap lokal di repository ini. Tidak ada publikasi otomatis atau pembuatan akun layanan lain.

## 13. Referensi implementasi

- React lazy dan Suspense: <https://react.dev/reference/react/lazy>.
- Intersection Observer: <https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API>.
- Aturan visual dan motion proyek: [STYLE.md](STYLE.md).

## 14. Revisi terdahulu: layout satu layar dan URL bersih

Permintaan lanjutan 28 Oktober 2026:

- Tinggi dasar setiap section adalah viewport stabil (`100svh`) dikurangi tinggi header aktual: 86px desktop / 72px mobile.
- Hero mencakup headline, CTA, ilustrasi adaptif, dan bar bawah dalam satu layar. Strip dekoratif antarbagian dihapus.
- Kartu galeri tertutup diringkas; deskripsi dan topik tersedia dalam Baca cerita. Seluruh informasi tetap tersedia.
- Desktop 1280×720, 1366×768, 1440×900 dan tablet 768×1024: enam section tertutup muat tepat satu layar setelah header.
- Mobile 320×568 dan 390×844: hero muat satu layar; bagian panjang tetap mengalir tanpa clip, scroll trap, atau pemaksaan ukuran font kecil.
- Membuka detail, zoom, viewport pendek, atau konten lebih banyak boleh memperbesar section. Tidak memakai fixed height, overflow hidden pada konten, atau scroll snap wajib.
- Semua klik internal biasa, CTA, skip link, logo, dan kembali ke atas tetap menggulir tanpa `#tentang`/fragment lain pada address bar. Target menerima fokus. Path/query dipertahankan, fragment lama dibersihkan saat mount.
- Klik termodifikasi tetap native agar fitur browser tidak rusak. Link eksternal tidak berubah.
- Tes tambahan memverifikasi pencegahan navigasi hash, scroll, fokus, klik termodifikasi, dan target yang tidak tersedia.

## 15. Revisi final: hanya hero wajib satu layar

Permintaan terbaru menggantikan kewajiban tinggi semua section pada revisi 14. Hanya hero mempertahankan min-height viewport dikurangi header. Section Tentang/Karya/Perjalanan/Pencapaian memakai tinggi alami dengan padding desktop 56–96px dan mobile 40px. Kontak memakai tinggi alami, heading 38–64px, serta padding 48–72px desktop / 40px mobile agar penutup lebih ringkas. Detail tetap boleh memperluas konten.

Running text kuning dikembalikan tepat setelah hero, sebagai strip tersendiri yang tidak mengurangi tinggi hero. Tiga frasa berulang dalam dua kelompok identik, bergerak kontinu dengan CSS transform selama 26 detik per siklus. Tanpa tombol kontrol dan tanpa jeda saat hover, sesuai permintaan pemilik. Preferensi reduced motion tetap menonaktifkan animasi. Konten duplikat bersifat dekoratif dan disembunyikan dari screen reader. Navigasi tanpa hash tetap dipertahankan.

Penerimaan: hero tetap tepat satu layar pada desktop/mobile sasaran, area bawah tidak dipaksa memenuhi layar, running text benar-benar bergerak, hover tidak menghentikan gerakan, tidak ada tombol jeda/putar, dan strip tidak menyebabkan horizontal overflow.

Revisi running text: bidang kuning penuh, border ink 3px, tipografi tebal 20–30px, dan separator asterisk kobalt. Gerakan kontinu tetap aktif saat hover, tanpa tombol kontrol dan tanpa state React. Reduced motion tetap dihormati.

## 16. Modal dokumentasi penghargaan dan sertifikasi

Tiga penghargaan dan enam sertifikasi memiliki ikon buka dengan nama aksesibel serta aria-haspopup dialog. Satu instance modal dipakai bersama; item terpilih disimpan sebagai state lokal di Journey. Field `image` masing-masing item bertipe path string atau null. Pemilik akan mengisi gambar sendiri; tidak menggunakan thumbnail LinkedIn atau ilustrasi sebagai bukti sertifikasi.

Modal reusable menerima open/onClose/title/children, memakai native dialog showModal, dan mendukung Escape, tombol tutup, klik backdrop, fokus awal pada tombol tutup, fokus kembali ke pemicu, serta penguncian scroll dengan cleanup. Judul mempunyai ID unik dari useId. Native modal membuat halaman belakang inert. Klik di panel dan drag yang dimulai dari panel tidak dianggap klik backdrop.

Jika image null, tampilkan keadaan kosong yang jelas. Jika URL gagal, tampilkan fallback gambar. Jika tersedia, render LazyImage dengan key URL saat modal terbuka; pertahankan gambar utuh dengan object-fit contain dan batasi ukuran ke viewport. Modal harus dapat digunakan ulang untuk konten React lain tanpa perubahan kode inti.

Revisi identitas header/footer: link beranda kiri navbar berupa kotak kuning, border ink 2px, shadow 4px, dan teks tebal “GUNG SATRIA”. Footer hanya menampilkan “2026 Gung Satria. All Reserved” di tengah, tanpa logo, tautan, ikon, atau teks tambahan. Tahun footer statis sesuai permintaan pemilik.

Revisi font: Space Grotesk 700 dipakai pada heading, wordmark, dan running text. Body tetap font sistem. Aset WOFF2 Latin sekitar 13 KB disajikan lokal dengan swap/preload; lisensi OFL disertakan, tanpa request font ke layanan eksternal. Target performa tetap memperhitungkan tambahan transfer font ini.

Revisi kartu proyek terbaru: style bergambar dipertahankan. Bagian atas berisi foto/ilustrasi pada bidang berwarna, bagian bawah paper berisi judul, deskripsi yang selalu terlihat, dan link website opsional. Baca cerita, tag, dan tipe kegiatan dihapus. Field image/imageAlt dapat diisi pemilik dengan dokumentasi asli; website null menyembunyikan tautan.

Revisi aksi kartu proyek: field website dan github bersifat opsional dan independen. Website menampilkan tombol kuning “Buka website” dengan ikon arah; github menampilkan tombol paper “GitHub” dengan ikon SVG. Tautan membuka tab baru secara aman; null tidak merender tombol maupun baris kosong. Tombol memakai border/shadow neubrutalism, tinggi minimal 44px, dan flex-wrap untuk mobile.

Instagram pemilik: @gungsatriaaa0, https://www.instagram.com/gungsatriaaa0/. Tautan disimpan dalam profile.instagram dan ditampilkan sebagai tombol dengan ikon SVG di bagian kontak, berdampingan dengan LinkedIn. Tombol membuka tab baru dengan noopener/noreferrer dan membungkus pada layar kecil. Footer tetap hanya teks copyright. Username berasal langsung dari pemilik; tidak mengambil konten Instagram secara otomatis.

## 17. Revisi copywriting profesional dan SEO

Revisi ini menggantikan keterangan SEO/lazy gallery pada versi terdahulu. Identitas utama: Gung Satria, web developer dari Ubud, Bali, dengan fokus eksplorasi otomasi AI memakai n8n. Headline “Web developer. Otomasi AI dengan n8n.” menjelaskan fokus; CTA Lihat proyek dan Diskusikan kebutuhan memberi langkah berikutnya. Bagian Tentang menghubungkan nama lengkap, studi, perusahaan, dan pengalaman. Kartu menjelaskan peran faktual; kompetisi disebut sebagai pencapaian, bukan aplikasi dengan fitur yang belum diketahui. Pengalaman, penghargaan, dan sertifikasi menggunakan heading yang jelas. Kontak mengajak pengunjung membahas kebutuhan/ruang lingkup, tanpa menjanjikan hasil bisnis yang belum dibuktikan.

SEO: title/description spesifik nama, bidang, dan lokasi; metadata sosial; PNG share 1200×630; JSON-LD ProfilePage dengan Person dan sameAs LinkedIn/Instagram; satu h1; prerender HTML statis; galeri tidak menunggu interaksi scroll. Canonical, og:url, absolute social image, dan sitemap bergantung domain produksi. Hosting yang direncanakan Vercel: SITE_URL dapat diisi eksplisit atau memakai VERCEL_PROJECT_PRODUCTION_URL. Preview Vercel noindex. Tidak menambah framework/dependency atau server produksi.

Acceptance tambahan: npm run build menghasilkan profil/proyek dalam raw HTML, JSON-LD valid JSON, domain kosong tidak menciptakan canonical rekaan, domain terkonfigurasi konsisten di semua metadata/sitemap, dan hero tetap muat di viewport sasaran. Peringkat Google dan trafik tidak dapat dipastikan melalui perubahan metadata; hasil indeks perlu dipantau setelah domain tersedia.

Revisi foto hero: monogram GS diganti foto pemilik dari src/assets/gungsatria.webp, tidak diedit. Kartu kanan diperlebar melalui grid 1.05fr/1.15fr, area foto desktop clamp(180px, 39svh, 360px), dan ukuran mobile clamp(110px, 18svh, 170px). Latar kobalt/grid, kartu miring, border, label, dan sticker tetap dipertahankan. Foto memakai contain tanpa crop, alt nama lengkap, dimensi intrinsik, eager/high priority. Header dan hero tetap satu viewport pada ukuran yang diperiksa. Aturan menyembunyikan kartu pada mobile pendek ≤740px tetap berlaku. URL foto pada HTML prerender diselaraskan dengan manifest Vite.

Revisi crop dan komposisi hero: foto asli tidak diubah; tampilan diperbesar ke tinggi 130% dan dipotong oleh overflow hidden di bagian bawah sehingga celana tidak terlihat. Posisi center top menjaga wajah/rambut. Bidang kuning melingkar dengan border/shadow berada di belakang foto; stiker </> dan n8n melayang dengan transform CSS, asterisk berputar 20 detik. Dekorasi aria-hidden dan mengikuti reduced motion. Tidak menambah library atau state animasi.

Mobile: kartu diperlebar hingga hampir lebar container, area foto clamp(210px, 27svh, 290px), heading minimum 36px, serta CTA/spacing dirapikan. Aturan lama menyembunyikan kartu pada tinggi ≤740px dihapus. Hero tetap minimum satu layar, tetapi boleh memanjang pada mobile sempit/pendek supaya foto tetap besar dan teks tidak dipotong. Ini menggantikan ketentuan terdahulu yang memaksa hero mobile pas satu layar pada semua ukuran.


Pembaruan fokus profesional (28 Oktober 2026): hero dan Tentang menonjolkan Web Developer dan Software Developer. PHP, Laravel, dan Flutter ditambahkan ke keahlian; AI/n8n tetap menjadi keahlian pendukung dan riwayat penghargaan, bukan fokus utama. Running text, label hero, CTA kontak, metadata SEO, serta preview sosial mengikuti fokus baru ini. Ketentuan ini menggantikan copy fokus otomasi pada revisi sebelumnya.


Animasi masuk (28 Oktober 2026): headline hero muncul per baris dengan jeda 90ms, diikuti deskripsi dan CTA; kartu profil masuk dari rotasi ringan. Reveal memakai IntersectionObserver yang sudah ada dan berhenti mengamati setelah terlihat. Konten Tentang/Kontak serta kartu proyek/penghargaan memakai jeda 80–160ms. Hanya opacity dan transform yang dianimasikan, tanpa library baru, perubahan layout, atau will-change permanen. Reduced motion menonaktifkan animasi dan menampilkan seluruh konten; fokus keyboard langsung membuka konten reveal. HTML prerender tetap memuat konten lengkap.


Penyempurnaan animasi section: heading h2 di dalam Reveal memakai clip-path bertahap 24 langkah selama 800ms (650ms mobile), menyerupai pembukaan teks tanpa mengganti konten atau memecah huruf untuk screen reader. Setiap pengalaman dan pendidikan memiliki observer sendiri; titik timeline membesar saat item masuk. Badge keahlian muncul berurutan dengan jeda 40ms, penghargaan masuk dengan kemiringan kecil dan ikon stamp satu kali, daftar sertifikat bertransisi ketika dibuka, serta simbol kontak mendapat satu entrance. Hero tidak diubah. Seluruh efek dimatikan oleh reduced motion; clip heading dan titik timeline dipulihkan eksplisit. Tidak ada library atau loop animasi baru.


Variasi animasi judul: efek teks bertahap dibatasi ke Tentang. Proyek bergeser horizontal, Pengalaman muncul dari bawah, Penghargaan masuk dengan rotasi seperti kartu ditempel, dan Kontak membesar ringan. Hero tetap. Semua entrance hanya sekali saat terlihat, memakai durasi 650–700ms dan mengikuti reduced motion. Revisi ini menggantikan penerapan efek mengetik pada seluruh h2.


Ikon UI menggunakan Font Awesome SVG melalui komponen Icon, dengan impor ikon individual dan CSS lokal. Panah, menu/tutup, lokasi, running text, dekorasi asterisk, preview dokumen, GitHub, dan Instagram tidak lagi menggunakan glyph Unicode/emoji atau SVG manual. Semua ikon dekoratif aria-hidden dan focusable=false; label teks tombol tetap tersedia. Tidak ada CDN atau font ikon eksternal. Simbol copyright dan tanda baca tetap berupa teks. Tes prerender memastikan SVG tersedia dan glyph lama tidak tersisa.


Galeri proyek terbaru: foto memenuhi area kartu berasio 2:1, tanpa padding latar, object-fit cover dengan posisi center top. Tombol Lihat gambar menggunakan ikon Font Awesome dan membuka komponen Modal bersama; gambar di dalam modal memakai contain agar tidak terpotong. Preview baru dimuat ketika modal dibuka. Keyboard, Escape, backdrop, dan scroll lock mengikuti komponen Modal yang sudah ada. Data pemilik diperbarui menjadi tiga proyek Website: ekstrakurikuler SMKN 1 Mas Ubud, HotelinAja, dan ARTASWAHA; filter AI dihapus karena tidak ada proyek dalam kategori itu.


Tech stack proyek: Eskul dan HotelinAja menampilkan badge PHP Native; ARTASWAHA menampilkan Laravel dan React.js. Badge memakai logo Font Awesome Brands yang diimpor individual, label teks, border hitam, shadow 2px, serta warna lembut per teknologi. Badge berada di bawah judul dan membungkus baris pada layar kecil. Kartu memakai layout flex agar tombol aksi sejajar di bagian bawah, sementara tombol Lihat gambar dan modal dipertahankan. Tidak menambah dependency.
