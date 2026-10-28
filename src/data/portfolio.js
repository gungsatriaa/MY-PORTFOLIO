// Sumber: tangkapan layar LinkedIn dan pembaruan langsung dari pemilik pada 28 Oktober 2026.
export const profile = {
  name: 'Gung Satria',
  fullName: 'Anak Agung Gede Satria Putra Wibawa',
  initials: 'GS',
  headline: 'Software Engineering Student | Web Developer | Software Developer',
  location: 'Ubud, Bali, Indonesia',
  linkedin: 'https://www.linkedin.com/in/gungsatriaa/',
  instagram: 'https://www.instagram.com/gungsatriaaa0/',
  skills: [
    'Web Development',
    'PHP',
    'Laravel',
    'Flutter',
    'HTML & CSS',
    'JavaScript & jQuery',
    'Bootstrap & Sass',
    'Analisis Bisnis',
    'Public Speaking',
    'AI Automation / n8n',
  ],
}

export const experiences = [
  {
    role: 'Founder CEO',
    organization: 'PT. Digisite Kreatif Indonesia',
    period: 'Mei 2026 – sekarang',
    description:
      'Mendirikan dan memimpin perusahaan solusi digital yang berfokus pada pengembangan website dan solusi perangkat lunak.',
  },
  {
    role: 'Pengembang Web',
    organization: 'SMK Negeri 1 Mas Ubud',
    period: 'Februari 2026 – sekarang',
    description:
      'Mengelola proyek pengembangan website sekolah, dari analisis kebutuhan dan perencanaan hingga implementasi.',
  },
  {
    role: 'Intern',
    organization: 'PT. Teknologi Arcom Mediaksa',
    period: 'Agustus 2025 – Februari 2026',
    description:
      'Menjalani magang pengembangan perangkat lunak dan teknologi web, serta menerapkan pembelajaran dalam lingkungan kerja profesional.',
  },
]

export const education = [
  {
    organization: 'Universitas Telkom',
    subject: 'Software Engineering',
    period: 'September 2026 – sekarang',
  },
  {
    organization: 'SMK Negeri 1 Mas Ubud',
    subject: 'Rekayasa Perangkat Lunak',
    period: 'Juli 2023 – Juli 2026',
  },
]

export const awards = [
  {
    image: '/images/apjii.webp',
    title: 'Beasiswa APJII Bali',
    issuer: 'Asosiasi Penyelenggara Jasa Internet Indonesia',
    date: 'Mei 2026',
  },
  {
    image: '/images/osii-week.webp',
    title: 'Juara 1 AI Application Competition OSII Week 2025',
    issuer: 'Universitas Katolik Darma Cendika',
    date: 'November 2025',
  },
  {
    image: '/images/smk-ai.webp',
    title: 'Juara 2 SMK AI Innovation Challenge',
    issuer: 'Haraka Communication bersama Direktorat SMK',
    date: null,
  },
]

export const certifications = [
  {
    image: '/images/public-speaking.webp',
    title: 'National Basic Public Speaking Learning',
    issuer: 'Speak-Up Academy Hub',
    issued: 'September 2026',
    expires: null,
  },
  {
    image: '/images/e-learning.webp',
    title: 'Academic Achiever Student 2026',
    issuer: 'SMK Negeri 1 Mas Ubud',
    issued: 'Maret 2026',
    expires: null,
  },
  {
    image: '/images/prokope.webp',
    title: 'Prokope Entrepreneurship Track',
    issuer: 'Prokope (Agency & Akademy)',
    issued: 'Maret 2026',
    expires: null,
  },
  {
    image: '/images/gamelab-html.webp',
    title: 'Gamelab Certificate HTML & CSS',
    issuer: 'Gamelab Indonesia',
    issued: 'April 2024',
    expires: 'April 2027',
  },
  {
    image: '/images/gamelab-javascript.webp',
    title: 'Gamelab Certificate JavaScript & jQuery',
    issuer: 'Gamelab Indonesia',
    issued: 'November 2024',
    expires: 'November 2027',
  },
  {
    image: '/images/gamelab-bootstrap.webp',
    title: 'Gamelabs Certificate Bootstrap & Sass',
    issuer: 'Gamelab Indonesia',
    issued: 'Agustus 2024',
    expires: 'Agustus 2027',
  },
]

export const categories = ['Semua', 'Website']

// Isi website/github dengan URL asli jika tersedia; null menyembunyikan tombol.
export const projects = [
  {
    id: 'eskul-stikmas',
    techStack: [{ label: 'PHP', icon: 'php' }],
    image: '/images/eskul.webp',
    imageAlt: 'Website ekstrakurikuler SMKN 1 Mas Ubud',
    title: 'Website SMKN 1 Mas Ubud',
    category: 'Website',
    description:
      'Platform pendaftaran ekstrakurikuler berbasis website yang dikembangkan untuk memudahkan siswa mendaftar kegiatan secara online serta membantu guru mengelola data peserta dengan lebih praktis dan efisien.',
    website: null,
    github: 'https://github.com/gungsatriaa/WEBSITE-EKSTRAKULIKULER',
    background: 'blue',
  },
  {
    id: 'hotelinaja',
    techStack: [{ label: 'PHP', icon: 'php' }],
    image: '/images/hotelin.webp',
    imageAlt: 'Solusi digital untuk Hotel Jaman Sekarang',
    title: 'HotelinAja',
    category: 'Website',
    description:
      'Website pemesanan hotel yang dikembangkan sebagai project sekolah di jurusan Rekayasa Perangkat Lunak. Menghadirkan solusi reservasi hotel secara online dengan sistem pembayaran digital yang terintegrasi melalui payment gateway Xendit.',
    website: null,
    github: 'https://github.com/gungsatriaa/HotelinAja',
    background: 'pink',
  },
  {
    id: 'artaswaha',
    techStack: [
      { label: 'Laravel', icon: 'laravel' },
      { label: 'React.js', icon: 'react' },
    ],
    image: '/images/artaswaha.webp',
    imageAlt: 'Platform edukasi Budaya Bali',
    title: 'ARTASWAHA',
    category: 'Website',
    description:
      'Platform edukasi interaktif yang dikembangkan untuk kompetisi bertema pendidikan dan budaya Bali. Bertujuan membantu generasi muda mempelajari Aksara Bali dan Paribasa Bali melalui materi, latihan, dan kuis yang menyenangkan sekaligus melestarikan budaya lokal.',
    website: 'https://artaswaha.kerthajaya.com/',
    github: 'https://github.com/gungsatriaa/ARTASWAHA',
    background: 'yellow',
  },
]

export function filterProjects(category) {
  return projects.filter(
    (project) => category === 'Semua' || project.category === category,
  )
}
