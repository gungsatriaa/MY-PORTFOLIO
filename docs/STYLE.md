# Style Guide — Gung Satria

Versi 1.2 · 28 Oktober 2026 · Acuan visual dan implementasi React.

## 1. Karakter dan konsep

**Neubrutalism dengan rasa studio digital personal:** tegas, terbuka, ingin tahu. Fokusnya web development, software engineering, dan AI automation, bukan estetika korporat. Kartu hero menyerupai jendela browser dengan foto asli pemilik, menghubungkan identitas pemilik dengan dunia pengembangan web. Ilustrasi node pada kartu AI menandai topik otomasi tanpa mengklaim arsitektur aplikasi asli.

Prinsip desain:

1. Tipografi dan komposisi membawa karakter; tidak bergantung pada foto stok atau video.
2. Garis hitam menunjukkan batas bagian dan kontrol. Bayangan keras menandai elemen yang bisa diinteraksikan atau disorot.
3. Satu komposisi miring pada hero menjadi pusat perhatian. Bagian informatif tetap lurus dan mudah dipindai.
4. Warna berani pada bidang besar, dengan teks yang kontras dan ruang kosong cukup.
5. Gerakan memberi umpan balik dan ritme; tidak menghalangi pembacaan atau navigasi.
6. Konten faktual lebih penting daripada dekorasi. Tidak ada testimoni, statistik, atau skill meter buatan.

Rencana awal ditinjau terhadap brief: pola dashboard berisi banyak kartu identik tidak digunakan untuk seluruh halaman. Hero berbentuk kartu browser, Tentang berupa dua kolom, pengalaman memakai timeline, pendidikan berupa daftar, penghargaan berupa kartu, dan kontak berupa bidang biru penuh. Kartu dipakai saat isi memang berupa kumpulan kegiatan, bukan sebagai pembungkus semua paragraf.

## 2. Token warna

Token sumber berada di `src/index.css`; gunakan custom properties untuk warna utama.

| Token | Nilai | Peran |
| --- | --- | --- |
| `--paper` | `#F9F9F6` | Latar utama dan permukaan kartu |
| `--ink` | `#161616` | Teks, garis, dan bayangan |
| `--blue` | `#2449EC` | Identitas utama, hero, kontak, fokus |
| `--yellow` | `#FBE75C` | Tombol utama, skill chip, aksen |
| `--pink` | `#F5B9D4` | Bidang ilustrasi sekunder |
| `--line` | `2px solid var(--ink)` | Batas standar |
| `--shadow` | `5px 5px 0 var(--ink)` | Bayangan standar tanpa blur |

Warna pendukung yang dipakai secara lokal:

| Nilai | Kegunaan |
| --- | --- |
| `#EEEEEA` | Latar bagian karya |
| `#F5E9F1` | Latar pencapaian |
| `#A4B5FF` | Bidang ilustrasi biru muda |
| `#464646` / `#555555` | Paragraf sekunder dan metadata |
| `#D8D8D2` | Skeleton |
| `#FFFFFF` | Teks pada biru dan permukaan hero |

Aturan kontras: teks utama memakai ink pada paper/kuning/pink; teks pada biru memakai putih. Kuning dipakai pada biru untuk dekorasi. Jangan memakai pink atau biru muda sebagai teks kecil pada putih. Fokus biru pada permukaan terang; fokus kuning pada kontak biru. Validasi ulang kontras bila token diubah, sasaran 4,5:1 untuk teks biasa dan 3:1 untuk teks besar/komponen.

Tidak ada gradient dekoratif, glassmorphism, shadow blur, atau mode gelap otomatis.

## 3. Tipografi

Display: Space Grotesk 700 untuk h1/h2/h3, kotak nama navbar, dan running text. Body tetap `'Trebuchet MS', 'Segoe UI', sans-serif` agar teks panjang nyaman dibaca. Font display di-self-host pada `public/fonts/space-grotesk-latin-700.woff2`, sekitar 13 KB, memakai font-display swap dan satu preload. Hanya satu weight/subset Latin untuk menghemat transfer; lisensi OFL disertakan di folder yang sama. Tidak ada request font ke pihak ketiga saat website dibuka.

| Peran | Desktop | Mobile | Bobot / karakter |
| --- | --- | --- | --- |
| Hero h1 | `clamp(44px, min(5.7vw, 9svh), 76px)` | `clamp(34px, 9.5vw, 48px)` | 900, line-height .99, tracking -.055em |
| Section h2 | `clamp(38px, 4.5vw, 58px)` | Minimum 38px | 900, line-height 1.04 |
| CTA heading | `clamp(42px, 6.7vw, 88px)` | Minimum 42px | 900 |
| Card h3 | 24px | 28px | Tebal, tracking rapat |
| Timeline h4 | 20px | 20px | Tebal |
| Paragraf utama | 15–16px | 15px | Line-height 1.75 |
| Intro tentang | 23px | 22px | 700, line-height 1.5 |
| Metadata | 11–13px | 11–13px | Netral, tetap kontras |
| Tombol | 14px | 14px | 800 |

Gunakan sentence case untuk label dan heading. Huruf kapital hanya untuk akronim/nama resmi. Teks penting jangan hanya diletakkan pada gambar. Batasi paragraf sekitar 45–75 karakter per baris. `br` dipakai pada headline untuk ritme; jangan menambahkan break manual di paragraf yang harus responsif.

## 4. Layout dan grid

Container desktop: `min(1180px, calc(100% - 80px))`, terpusat. Mobile: lebar viewport dikurangi 40px. Dasar spacing memakai kelipatan 4/8px; pengecualian kecil untuk garis dan penyetelan tipografi.

```text
Desktop
┌ GS✳ ───────── Tentang  Karya  Perjalanan  Kontak  LinkedIn ┐
│ Intro + headline besar       │ kartu browser GS miring    │
│ Deskripsi + dua CTA          │ sticker kecil              │
│ Tentang / heading            │ ringkasan + identitas      │
├ Karya / heading dan penjelasan ───────────────────────────┤
│ Filter → tiga kartu kegiatan + detail disclosure          │
├ Perjalanan ──────────────────────────────────────────────┤
│ Timeline pengalaman          │ pendidikan + keahlian      │
├ Penghargaan → tiga kartu / sertifikasi disclosure ────────┤
│ Bidang biru / CTA kontak besar + LinkedIn                  │
└ Footer / tahun / kembali ke atas ─────────────────────────┘

Mobile
GS✳ + tombol Menu
Headline → CTA → ilustrasi GS
Tentang → galeri satu kolom
Pengalaman → pendidikan → skill
Penghargaan → sertifikasi → kontak → footer
```

| Breakpoint | Perubahan |
| --- | --- |
| >1000px | Layout desktop, gap besar, tiga kolom galeri/award |
| 761–1000px | Gap diperkecil; hero dan galeri tetap desktop, ukuran teks disesuaikan |
| ≤760px | Menu disclosure, satu kolom, section padding 40px, galeri bertumpuk |

Header total 86px desktop / 72px mobile, termasuk border. Token `--header-height` dipakai untuk header, panel menu, offset scroll, dan tinggi section. Hanya hero memiliki `min-height: calc(100svh - var(--header-height))`, bukan height tetap. Section lainnya mengikuti tinggi isi. Padding section utama `clamp(56px, 7vw, 96px)` desktop / 40px mobile. Kontak menggunakan padding 48–72px desktop / 40px mobile dengan heading 38–64px. Bagian pendek terpusat vertikal. Header sticky memakai z-index 20; skip link 100. Konten panjang atau disclosure terbuka boleh menambah tinggi agar tidak terpotong.

Tidak menyembunyikan overflow global untuk menutupi bug. Elemen miring harus tetap berada dalam ruang aman container. Strip kuning running text ditempatkan tepat setelah hero. Overflow dibatasi secara lokal pada jendela teks; konten halaman tetap mengalir secara normal.

## 5. Bentuk, border, dan elevasi

- Bentuk dominan persegi, radius 0. Tidak menambahkan rounded pill untuk semua chip.
- Border standar 2px; kartu hero dan sebagian ilustrasi 3px.
- Shadow standar 5px; hero 10px; komponen kecil 3–4px.
- Shadow selalu ink, offset kanan/bawah, tanpa blur.
- Rotasi hero +4°, label sekitar -7°, sticker -8°. Hindari rotasi pada paragraf panjang dan tabel.
- Ikon dekoratif berupa glyph ✳, +, dan arah sederhana; tidak menambah icon package.
- Dekorasi `aria-hidden=true`. Label yang menjelaskan tujuan harus berupa teks nyata.

## 6. Spesifikasi komponen

### Header

Logo GS dengan asterisk biru. Link desktop diberi ruang jelas; LinkedIn dipisahkan garis vertikal. Mobile menggunakan button, `aria-expanded`, dan `aria-controls`. Panel terbuka berada di bawah header, bukan overlay modal; Escape menutup dan mengembalikan fokus. Navigasi ditutup ketika tujuan dipilih.

### Hero dan identitas

Headline sangat besar dengan fokus pada “Membangun web. Merangkai otomasi.” Kartu browser GS adalah ilustrasi identitas, bukan foto pemilik. Kartu tidak interaktif dan tidak boleh terlihat seperti tombol. Hero muncul segera; tidak dibungkus Suspense atau image lazy. Satu animasi entrance menggerakkan opacity dan transform, selesai dalam 650ms.

### Tombol dan link

Tombol utama kuning, border ink, shadow 5px, tinggi minimal 52px. Hover bergerak -2px/-2px dengan shadow 7px. Active bergerak +4px/+4px dengan shadow 1px. Hover/active maksimal 160ms. Link sekunder bergaris bawah. Link membuka tab baru diberi `rel=noopener noreferrer` dan keterangan untuk screen reader.

### Filter

Button 44px minimum; default paper/ink. Aktif ink/putih dengan shadow biru 3px dan `aria-pressed=true`. Kategori: Semua, Website, AI. Ini filter, bukan tab. `role=group` memiliki label. Jumlah hasil berada dalam live status terpisah.

### Kartu kegiatan

Pertahankan area gambar/foto di atas pada bidang berwarna biru muda, kuning, atau pink, dengan padding 24px dan border bawah ink. Gambar mobile berasio 3:2; desktop memakai tinggi clamp(160px, 20svh, 220px), object-fit contain. Bagian bawah paper memuat judul, deskripsi langsung, dan tautan website opsional. Tidak memakai kategori kecil, tag, atau Baca cerita/disclosure. Border dan bayangan keras tetap sama; kartu dalam satu baris memiliki tinggi yang sama.

Data proyek memiliki image, imageAlt, title, description, website, category, dan background. image dapat diganti foto/dokumentasi asli. URL website null tidak merender link. Gambar saat ini masih ilustrasi lokal; alt text menjelaskannya. Ketika mengganti dengan foto, sesuaikan imageAlt. Native lazy loading, skeleton, dan fallback gambar tetap memakai LazyImage.

### Timeline dan pendidikan

Pengalaman diurutkan terbaru, garis vertikal 2px dengan marker kuning. Urutan ini bermakna waktu, bukan nomor dekoratif. Pendidikan menggunakan blok sederhana, periode sebelum institusi. Tidak ada durasi otomatis yang dapat menjadi usang. Chip skill tidak diberi persentase atau level yang belum terbukti.

### Penghargaan dan sertifikasi

Tiga kartu award pada latar pink pucat. Judul lengkap, penerbit, tanggal bila tersedia. Sertifikat berada dalam disclosure native agar enam entri tidak mendominasi halaman awal; bukan lazy fetch. Tanggal kedaluwarsa ditampilkan sebagai informasi sumber. Tidak membuat badge “verified” tanpa mekanisme verifikasi.

### Skeleton dan error

Skeleton toolbar + proporsi tiga kartu desktop / satu placeholder terlihat mobile. Nama aksesibel “Memuat galeri proyek…”. Pulse opacity ringan, bukan shimmer kontras. Gambar mempertahankan rasio sebelum dan sesudah load. Jangan memaksa skeleton tampil dengan timeout.

Jika gambar gagal, ganti dengan teks “Pratinjau tidak tersedia.” Jika chunk galeri gagal, tampilkan pesan koneksi dan tombol “Muat ulang”. Jangan menghilangkan bagian halaman lain atau menampilkan stack trace kepada pengunjung.

## 7. Sistem motion

| Interaksi | Teknik | Durasi | Pemicu |
| --- | --- | --- | --- |
| Kartu hero masuk | CSS keyframes opacity + translate + rotate | 650ms | Mount pertama |
| Reveal bagian | Intersection Observer + CSS opacity/translateY 20px | 550ms | Bagian memasuki viewport; sekali |
| Hover/press tombol | CSS transform + shadow | 160ms | Pointer/active |
| Filter | State lokal + entrance kartu opacity/translate 10px | 350ms | Pemilihan kategori |
| Gambar selesai load | CSS opacity | 200ms | Native load event |
| Skeleton | CSS opacity .55 → 1 | 1400ms alternating | Selama pemuatan asli |
| Navigasi section | scrollIntoView + CSS smooth scroll | Browser | Klik internal biasa, tanpa perubahan fragment URL |

Animasi AOS-style dibuat dengan Intersection Observer dan CSS, tanpa menambah paket AOS. Margin reveal `0px 0px -24px 0px`; galeri dimuat tanpa menunggu scroll agar konten dapat ditemukan crawler. Observer dibersihkan ketika berhasil terlihat atau komponen unmount. Tidak menggunakan event scroll berulang, polling, mouse-follow, parallax, atau animasi layout `top/left/width`.

`prefers-reduced-motion: reduce` wajib mematikan semua animasi, transisi, pulse, dan smooth scroll. Reveal menjadi terlihat penuh. Fokus pada anak reveal juga membuat kontennya terlihat agar navigasi keyboard tidak mendarat pada link transparan. Jika browser tidak mendukung Intersection Observer, konten tetap ditampilkan.

Motion yang berjalan terus mencakup skeleton saat pemuatan dan running text dekoratif tanpa kontrol. Pada mobile dengan tinggi maksimum 740px, ilustrasi hero yang dekoratif disembunyikan agar headline, deskripsi, dan CTA tetap muat. Ilustrasi tetap muncul pada layar mobile yang lebih tinggi. Tidak menggunakan scroll snap atau mengunci scroll.

## 8. Panduan React dan CSS

- Pisahkan konten (`data/portfolio.js`), efek browser (`hooks/useInView.js`), dan tampilan (`components/`).
- Jangan membuat wrapper UI baru tanpa kebutuhan berulang nyata.
- Hook observer memakai ref, state satu kali, effect, dan cleanup. Tidak ada state update tiap frame.
- Komponen galeri di-import melalui `lazy` level modul dan `Suspense` lokal, disertai Error Boundary.
- Gunakan HTML semantik dahulu: anchor untuk navigasi, button untuk aksi, details untuk disclosure, list untuk kumpulan entri.
- Selector komponen berupa kelas deskriptif; selector global hanya reset/type dasar. Variasi state melalui data/ARIA attributes.
- Jangan memakai `!important` selain override aksesibilitas reduced motion dan utilitas yang memang perlu.
- Jangan menambahkan CSS framework atau library motion untuk pola yang sudah tersedia.
- Hindari `will-change` permanen pada banyak elemen; browser dapat menangani transisi pendek yang ada.
- Metadata berada di `index.html`; jangan menggandakan sumber kebenaran profil di banyak komponen.
- Build output Vite tidak diedit manual. Asset ber-hash cocok untuk cache immutable; HTML perlu cache lebih pendek.

## 9. Bahasa dan konten

Nada: personal, jelas, ringkas, profesional tanpa jargon promosi. Gunakan “saya” untuk pemilik dan “kamu” bila mengajak pengunjung. Pertahankan nama resmi lembaga/sertifikat. Jelaskan batas sumber langsung pada detail relevan, jangan menutupi ketiadaan data dengan angka fiktif.

Contoh label: “Jelajahi karya”, “Baca cerita”, “Sapa di LinkedIn”, “Muat ulang”. Hindari “Click here”, tombol tidak berfungsi, “Download CV” tanpa file, dan klaim hasil seperti “meningkatkan konversi 200%” tanpa bukti.

Tidak ada placeholder lorem ipsum, testimoni palsu, indikator online, status menerima proyek, atau jumlah klien yang belum dikonfirmasi.

## 10. Checklist QA visual

- [ ] Hero, foto, sticker, dan CTA tidak saling bertumpuk pada 320–1440px.
- [ ] Teks panjang judul award tidak keluar dari kartu.
- [ ] Layout tidak bergeser saat ilustrasi selesai dimuat.
- [ ] Focus ring terlihat pada semua permukaan dan sticky header tidak menutupi anchor.
- [ ] Filter aktif jelas tanpa hanya bergantung pada warna.
- [ ] Tombol mobile dapat disentuh; menu dapat ditutup dengan Escape dan pilihan link.
- [ ] Keyboard dapat membuka detail, sertifikat, dan semua CTA.
- [ ] Reduced motion menampilkan semua konten tanpa gerak.
- [ ] Gambar error dan chunk error memiliki pesan yang dapat dibaca.
- [ ] Tidak ada watermark, logo template Vite/React, atau asset starter yang tersisa.
- [ ] Screenshot desktop dan viewport mobile ditinjau sebelum mengklaim layout selesai.

Periksa implementasi final dan hasil verifikasi di README. Panduan ini harus diperbarui bersamaan dengan perubahan token, breakpoint, atau interaksi inti.

## 11. Navigasi URL bersih dan penerimaan layout

Tautan tetap memiliki href fragment untuk fallback dan perilaku native klik termodifikasi. Klik internal biasa ditangani satu handler pada root: preventDefault → scrollIntoView → fokus ke section dengan tabIndex=-1. Section tidak ditambahkan ke history atau URL; path dan query tetap sama. Fragment lama dihapus saat mount dengan replaceState. Ctrl/Cmd/Shift/Alt dan klik nonutama tetap mengikuti perilaku browser. Reduced motion tetap mengikuti CSS. Link eksternal tidak dicegat.

Pengujian viewport 1280×720, 1366×768, dan 1440×900: enam section tertutup masing-masing tepat setinggi area viewport dikurangi header. Viewport tablet 768×1024 juga memenuhi ukuran tersebut. Pada 320×568 dan 390×844, hero tetap satu layar, sementara galeri, perjalanan, dan pencapaian memanjang mengikuti isi. Prioritaskan ukuran teks dan akses konten daripada memaksa seluruh daftar menjadi satu layar kecil. Detail terbuka dan zoom boleh membuat section lebih tinggi.

## 12. Revisi final: proporsi alami dan running text

Bagian 11 tentang ukuran semua section satu layar merupakan catatan pengujian revisi terdahulu. Sesuai permintaan terbaru, hanya hero yang wajib pas satu layar. Section lainnya mengikuti isi dan padding agar tidak menyisakan ruang kosong berlebihan, terutama kontak.

RunningText.jsx menggunakan dua kelompok frasa identik dalam track selebar max-content. Animasi linear 26 detik memindahkan track ke -50% sehingga sambungan mengulang tanpa loncatan. Kelompok memiliki ukuran identik dan tidak menyusut. Strip menggunakan overflow hidden agar tidak memperlebar viewport. Tidak ada tombol jeda/putar atau aturan pause saat hover; reduced motion mematikan animasi tanpa menghilangkan strip. Gunakan transform CSS, tanpa timer atau update state per frame.

Revisi running text: bidang kuning penuh, border ink 3px, tipografi tebal 20–30px, dan separator asterisk kobalt. Gerakan kontinu tetap aktif saat hover, tanpa tombol kontrol dan tanpa state React. Reduced motion tetap dihormati.

## 13. Modal dan ikon pratinjau

Ikon buka berupa SVG outline 20px dalam tombol kuning 44×44px, border ink 2px dan shadow 3px. Tempatkan di kanan atas kartu penghargaan dan di samping judul sertifikasi, dengan flex-shrink: 0 agar tidak menyempit pada mobile. Judul tetap membungkus secara alami.

Modal memakai permukaan paper, border ink 3px, shadow 7px, header kuning, dan backdrop ink opacity .7. Lebar maksimum 880px / viewport dikurangi 40px. Tinggi maksimum viewport stabil dikurangi 40px; overflow berada pada panel. Judul 20–28px, tombol tutup 44px, padding 24px desktop / 16px mobile. Gambar object-fit contain dalam area maksimum 58svh / 540px. Gunakan skeleton dan error state dari LazyImage; jangan memotong sertifikat agar mengisi bidang.

Entrance memakai keyframe pendek 180ms dan mengikuti reduced motion. Header modal bukan site-header sticky. Native dialog berada di top layer sehingga tidak memerlukan z-index arbitrer atau portal tambahan.

Revisi identitas header/footer: link beranda kiri navbar berupa kotak kuning, border ink 2px, shadow 4px, dan teks tebal “GUNG SATRIA”. Footer hanya menampilkan “2026 Gung Satria. All Reserved” di tengah, tanpa logo, tautan, ikon, atau teks tambahan. Tahun footer statis sesuai permintaan pemilik.

Revisi tipografi: headline hero, heading bagian/kartu/modal, wordmark, dan running text menggunakan Space Grotesk bobot asli 700. Angka bobot 900 pada tabel awal adalah acuan revisi terdahulu untuk Trebuchet; teks display baru memakai 700 tanpa synthetic bold. Paragraf, navigasi, tombol, metadata, footer, dan monogram tetap memakai font sebelumnya.

Revisi aksi kartu proyek: field website dan github bersifat opsional dan independen. Website menampilkan tombol kuning “Buka website” dengan ikon arah; github menampilkan tombol paper “GitHub” dengan ikon SVG. Tautan membuka tab baru secara aman; null tidak merender tombol maupun baris kosong. Tombol memakai border/shadow neubrutalism, tinggi minimal 44px, dan flex-wrap untuk mobile.

Instagram pemilik: @gungsatriaaa0, https://www.instagram.com/gungsatriaaa0/. Tautan disimpan dalam profile.instagram dan ditampilkan sebagai tombol dengan ikon SVG di bagian kontak, berdampingan dengan LinkedIn. Tombol membuka tab baru dengan noopener/noreferrer dan membungkus pada layar kecil. Footer tetap hanya teks copyright. Username berasal langsung dari pemilik; tidak mengambil konten Instagram secara otomatis.

## 14. Copywriting profesional

Bahasa utama Indonesia, nada personal-profesional. Pemilik memakai “saya”; ajakan kepada calon klien memakai “Anda”. Prioritaskan kejelasan: profesi/fokus di hero, nama lengkap dan latar di Tentang, kontribusi pada kartu, pengalaman/pendidikan, penghargaan/sertifikasi, lalu ajakan diskusi. Label navigasi Proyek dan Pengalaman lebih eksplisit daripada istilah editorial.

Heading hero: “Web developer. Otomasi AI dengan n8n.” CTA: “Lihat proyek”, “Diskusikan kebutuhan”, “Diskusi via LinkedIn”. Jangan menambahkan jargon promosi, superlatif, statistik, testimoni, atau janji ROI. Nama resmi lembaga, penghargaan, dan sertifikasi dipertahankan. Footer mengikuti teks yang disetujui pemilik. Copy teknis domain/build tidak ditampilkan pada alur pengunjung.

Social preview PNG 1200×630 menggunakan palet paper/ink/kobalt/kuning dan teks identitas, fokus profesional, serta lokasi. Alt metadata menjelaskan identitas visual. Perubahan copy harus tetap menjaga hero satu layar pada 320×568, 390×844, dan desktop yang diperiksa.

Revisi foto hero: monogram GS diganti foto pemilik dari src/assets/gungsatria.webp, tidak diedit. Kartu kanan diperlebar melalui grid 1.05fr/1.15fr, area foto desktop clamp(180px, 39svh, 360px), dan ukuran mobile clamp(110px, 18svh, 170px). Latar kobalt/grid, kartu miring, border, label, dan sticker tetap dipertahankan. Foto memakai contain tanpa crop, alt nama lengkap, dimensi intrinsik, eager/high priority. Header dan hero tetap satu viewport pada ukuran yang diperiksa. Aturan menyembunyikan kartu pada mobile pendek ≤740px tetap berlaku. URL foto pada HTML prerender diselaraskan dengan manifest Vite.

Revisi crop dan komposisi hero: foto asli tidak diubah; tampilan diperbesar ke tinggi 130% dan dipotong oleh overflow hidden di bagian bawah sehingga celana tidak terlihat. Posisi center top menjaga wajah/rambut. Bidang kuning melingkar dengan border/shadow berada di belakang foto; stiker </> dan n8n melayang dengan transform CSS, asterisk berputar 20 detik. Dekorasi aria-hidden dan mengikuti reduced motion. Tidak menambah library atau state animasi.

Mobile: kartu diperlebar hingga hampir lebar container, area foto clamp(210px, 27svh, 290px), heading minimum 36px, serta CTA/spacing dirapikan. Aturan lama menyembunyikan kartu pada tinggi ≤740px dihapus. Hero tetap minimum satu layar, tetapi boleh memanjang pada mobile sempit/pendek supaya foto tetap besar dan teks tidak dipotong. Ini menggantikan ketentuan terdahulu yang memaksa hero mobile pas satu layar pada semua ukuran.

Posisi label Web & otomasi. menggunakan normal flow dengan jarak bawah 34px desktop / 24px mobile, menggantikan posisi absolut. Padding atas wrapper dihapus agar ruang tersebut dialokasikan oleh label sendiri. Rotasi dipertahankan, tetapi label tidak menimpa teks header kartu. Lint/build dan pemeriksaan desktop/mobile lolos.


Pembaruan fokus profesional (28 Oktober 2026): hero dan Tentang menonjolkan Web Developer dan Software Developer. PHP, Laravel, dan Flutter ditambahkan ke keahlian; AI/n8n tetap menjadi keahlian pendukung dan riwayat penghargaan, bukan fokus utama. Running text, label hero, CTA kontak, metadata SEO, serta preview sosial mengikuti fokus baru ini. Ketentuan ini menggantikan copy fokus otomasi pada revisi sebelumnya.


Animasi masuk (28 Oktober 2026): headline hero muncul per baris dengan jeda 90ms, diikuti deskripsi dan CTA; kartu profil masuk dari rotasi ringan. Reveal memakai IntersectionObserver yang sudah ada dan berhenti mengamati setelah terlihat. Konten Tentang/Kontak serta kartu proyek/penghargaan memakai jeda 80–160ms. Hanya opacity dan transform yang dianimasikan, tanpa library baru, perubahan layout, atau will-change permanen. Reduced motion menonaktifkan animasi dan menampilkan seluruh konten; fokus keyboard langsung membuka konten reveal. HTML prerender tetap memuat konten lengkap.


Penyempurnaan animasi section: heading h2 di dalam Reveal memakai clip-path bertahap 24 langkah selama 800ms (650ms mobile), menyerupai pembukaan teks tanpa mengganti konten atau memecah huruf untuk screen reader. Setiap pengalaman dan pendidikan memiliki observer sendiri; titik timeline membesar saat item masuk. Badge keahlian muncul berurutan dengan jeda 40ms, penghargaan masuk dengan kemiringan kecil dan ikon stamp satu kali, daftar sertifikat bertransisi ketika dibuka, serta simbol kontak mendapat satu entrance. Hero tidak diubah. Seluruh efek dimatikan oleh reduced motion; clip heading dan titik timeline dipulihkan eksplisit. Tidak ada library atau loop animasi baru.


Variasi animasi judul: efek teks bertahap dibatasi ke Tentang. Proyek bergeser horizontal, Pengalaman muncul dari bawah, Penghargaan masuk dengan rotasi seperti kartu ditempel, dan Kontak membesar ringan. Hero tetap. Semua entrance hanya sekali saat terlihat, memakai durasi 650–700ms dan mengikuti reduced motion. Revisi ini menggantikan penerapan efek mengetik pada seluruh h2.


Ikon UI menggunakan Font Awesome SVG melalui komponen Icon, dengan impor ikon individual dan CSS lokal. Panah, menu/tutup, lokasi, running text, dekorasi asterisk, preview dokumen, GitHub, dan Instagram tidak lagi menggunakan glyph Unicode/emoji atau SVG manual. Semua ikon dekoratif aria-hidden dan focusable=false; label teks tombol tetap tersedia. Tidak ada CDN atau font ikon eksternal. Simbol copyright dan tanda baca tetap berupa teks. Tes prerender memastikan SVG tersedia dan glyph lama tidak tersisa.


Galeri proyek terbaru: foto memenuhi area kartu berasio 2:1, tanpa padding latar, object-fit cover dengan posisi center top. Tombol Lihat gambar menggunakan ikon Font Awesome dan membuka komponen Modal bersama; gambar di dalam modal memakai contain agar tidak terpotong. Preview baru dimuat ketika modal dibuka. Keyboard, Escape, backdrop, dan scroll lock mengikuti komponen Modal yang sudah ada. Data pemilik diperbarui menjadi tiga proyek Website: ekstrakurikuler SMKN 1 Mas Ubud, HotelinAja, dan ARTASWAHA; filter AI dihapus karena tidak ada proyek dalam kategori itu.
