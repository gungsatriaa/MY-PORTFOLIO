# SEO dan copywriting portofolio

Pembaruan 28 Oktober 2026. Status: domain produksi https://gungsatria.com dikonfigurasi di .env.production; hosting VPS aaPanel. Deployment server belum diverifikasi.

## Posisi dan pesan utama

Portofolio memperkenalkan Gung Satria sebagai Web Developer dan Software Developer dari Ubud, Bali, dengan fokus pengembangan website dan perangkat lunak. Sasaran pembaca: calon klien, perekrut, dan kolaborator. Pengalaman mahasiswa, perusahaan, dan pekerjaan ditampilkan sebagai kredibilitas yang dapat ditelusuri, tanpa metrik atau testimoni rekaan.

Topik yang ditulis secara alami: Gung Satria, web developer Bali/Ubud, pengembangan website, software developer, PHP, Laravel, Flutter, pengalaman software engineering. Tidak menggunakan meta keywords, pengulangan kata kunci berlebihan, atau klaim peringkat.

Title: **Gung Satria | Web & Software Developer di Bali**.

Description: **Portofolio Gung Satria, Web Developer dan Software Developer di Ubud, Bali. Kenali proyek, pengalaman, serta keahlian PHP, Laravel, dan Flutter.**

CTA utama: Lihat proyek → Diskusikan kebutuhan → Diskusi via LinkedIn. Instagram menjadi saluran tambahan. Tidak menambah form kontak tanpa backend atau alamat email yang belum diberikan.

## Yang sudah diterapkan

- Metadata terpusat di `scripts/seo.mjs`, dipasang melalui hook HTML Vite untuk development dan build.
- Satu h1, heading bagian yang deskriptif, landmark, bahasa halaman Indonesia, dan alt gambar yang sesuai.
- JSON-LD ProfilePage dengan Person, nama lengkap/nama tampilan, lokasi umum, fokus, serta tautan LinkedIn/Instagram dari pemilik. Tidak ada rating, testimoni, foto orang rekaan, atau credential URL palsu.
- Open Graph dan Twitter card; gambar PNG lokal 1200×630 di `/og-image.png`.
- Prerender dengan React DOM server dan Vite yang sudah terpasang. Raw HTML produksi mencakup profil dan seluruh kartu; tidak ada dependency atau layanan baru.
- Galeri tetap memakai lazy/Suspense, tetapi chunk dimuat saat render, bukan setelah scroll. Gambar tetap lazy-loaded. Halaman tidak meminta crawler berinteraksi agar menemukan proyek.
- Render browser tetap memakai createRoot dan membangun interaksi dari data yang sama; ini prerender statis dengan client rendering, bukan server runtime atau hydration framework.
- Canonical, URL sosial absolut, sitemap, dan robots merujuk domain produksi saat tersedia. Preview Vercel memakai noindex,follow.

## Konfigurasi VPS aaPanel

Salin `.env.example` ke `.env.production` sekali pada VPS; file environment lokal diabaikan Git. Domain utama `https://gungsatria.com` disimpan melalui `SITE_URL` di `.env.production`, lalu dibaca saat build untuk canonical, JSON-LD, Open Graph, robots, dan sitemap. Ini nilai publik; tidak perlu environment runtime. Untuk mengganti domain, ubah nilai tersebut dan build ulang. `.env.local` maupun environment shell memiliki prioritas lebih tinggi, jadi jangan menyimpan domain lama di sana.

Jalankan `./deploy.sh` di checkout VPS untuk pull main, install dependency, lint, tes, dan build. Arahkan document root website aaPanel ke folder `dist` pada checkout tersebut. Aktifkan SSL dan redirect HTTPS, lalu arahkan www ke domain utama jika dipakai. Tidak perlu server Node/PM2. Instruksi lengkap terdapat pada bagian deployment README.

Resolver masih mendukung fallback domain Vercel untuk kompatibilitas, tetapi deployment aaPanel menggunakan SITE_URL eksplisit. Jangan mengatur VERCEL_ENV=preview pada VPS produksi karena mode itu sengaja memberi noindex dan tidak menghasilkan sitemap.

## Pemeriksaan yang dilakukan

- Lint dan 8 tes Node: data konten, URL opsional, canonical/domain resolution, JSON-LD, dan noindex preview.
- Assert build: tepat satu h1, nama lengkap, dan semua judul proyek ada di HTML hasil prerender.
- Build dengan domain reserved untuk pengujian: canonical, og:image, sitemap, robots, dan JSON-LD konsisten; domain uji kemudian dibersihkan dengan build lokal normal.
- Build lokal tanpa domain: tidak membuat canonical/sitemap rekaan.
- Browser produksi: galeri muncul tanpa scroll; tampilan hero dan metadata diperiksa. Hasil viewport dicatat di README.

Belum dilakukan: verifikasi deployment VPS aaPanel, Rich Results Test pada URL publik, Search Console, Lighthouse produksi, dan pemantauan Core Web Vitals/traffic. Tidak menyatakan rich result, peringkat, atau trafik terjamin.

## Setelah domain aktif

1. Pastikan website publik mengembalikan HTTP 200, HTTPS aktif, dan tidak tertahan autentikasi atau noindex produksi.
2. Buka view-source: periksa title, description, canonical, JSON-LD, dan teks proyek. Canonical harus menunjuk satu URL utama.
3. Periksa `/robots.txt`, `/sitemap.xml`, dan `/og-image.png`. Preview kartu sosial memakai URL absolut yang dapat diakses publik.
4. Verifikasi domain di Google Search Console, kirim sitemap, lalu gunakan URL Inspection untuk memeriksa halaman hasil render dan meminta pengindeksan bila perlu.
5. Uji structured data dan preview berbagi. Hapus klaim/field yang tidak sesuai dengan konten yang terlihat, bukan menambahkan informasi palsu untuk mengejar hasil kaya.
6. Jalankan Lighthouse mobile pada deployment produksi dan periksa pengalaman pengguna nyata. Perubahan SEO tidak menggantikan konten yang bermanfaat dan performa yang baik.

## Konten lanjutan yang paling membantu

Ganti ilustrasi dengan screenshot proyek asli dan alt yang akurat. Tambahkan studi singkat tentang masalah, peran pribadi, proses, teknologi yang dipakai, dan hasil yang benar-benar dapat dibuktikan. Lengkapi proyek n8n dengan workflow asli sebelum mengklaim studi kasus otomasi. Perbarui tautan demo/repository dan dokumentasi penghargaan saat tersedia. Profil sosial dan GitHub yang konsisten membantu pengunjung menelusuri karya; hindari layanan backlink atau review palsu.

## Acuan

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)
