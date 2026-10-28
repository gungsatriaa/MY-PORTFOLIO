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
    image: null,
    title: 'Beasiswa APJII Bali',
    issuer: 'Asosiasi Penyelenggara Jasa Internet Indonesia',
    date: 'Mei 2026',
  },
  {
    image: null,
    title: 'Juara 1 AI Application Competition OSII Week 2025',
    issuer: 'Universitas Katolik Darma Cendika',
    date: 'November 2025',
  },
  {
    image: null,
    title: 'Juara 2 SMK AI Innovation Challenge',
    issuer: 'Haraka Communication bersama Direktorat SMK',
    date: null,
  },
]

export const certifications = [
  {
    image: null,
    title: 'National Basic Public Speaking Learning',
    issuer: 'Speak-Up Academy Hub',
    issued: 'September 2026',
    expires: null,
  },
  {
    image: null,
    title: 'Academic Achiever Student 2026',
    issuer: 'SMK Negeri 1 Mas Ubud',
    issued: 'Maret 2026',
    expires: null,
  },
  {
    image: null,
    title: 'Prokope Entrepreneurship Track',
    issuer: 'Prokope (Agency & Akademy)',
    issued: 'Maret 2026',
    expires: null,
  },
  {
    image: null,
    title: 'Gamelab Certificate HTML & CSS',
    issuer: 'Gamelab Indonesia',
    issued: 'April 2024',
    expires: 'April 2027',
  },
  {
    image: null,
    title: 'Gamelab Certificate JavaScript & jQuery',
    issuer: 'Gamelab Indonesia',
    issued: 'November 2024',
    expires: 'November 2027',
  },
  {
    image: null,
    title: 'Gamelabs Certificate Bootstrap & Sass',
    issuer: 'Gamelab Indonesia',
    issued: 'Agustus 2024',
    expires: 'Agustus 2027',
  },
]

export const categories = ['Semua', 'Website', 'AI']

// Isi website/github dengan URL asli jika tersedia; null menyembunyikan tombol.
export const projects = [
  {
    id: 'school-website',
    image: '/images/personal-space.svg',
    imageAlt: 'Ilustrasi website sekolah',
    title: 'Website SMKN 1 Mas Ubud',
    category: 'Website',
    description:
      'Mengembangkan website SMK Negeri 1 Mas Ubud dengan mengelola proses dari analisis kebutuhan dan perencanaan hingga implementasi.',
    website: 'https://smkn1masubud.sch.id',
    github: 'https://github.com/gungsatriaaa0/smk-negeri-1-mas-ubud',
    background: 'blue',
  },
  {
    id: 'digisite',
    image: '/images/studio-notes.svg',
    imageAlt: 'Ilustrasi solusi digital Digisite',
    title: 'Digisite Kreatif Indonesia',
    category: 'Website',
    description:
      'Perusahaan solusi digital yang saya dirikan dan pimpin, dengan fokus pada pengembangan website dan perangkat lunak di Ubud, Bali.',
    website: null,
    github: null,
    background: 'yellow',
  },
  {
    id: 'ai-competition',
    image: '/images/playground.svg',
    imageAlt: 'Ilustrasi kegiatan kompetisi AI',
    title: 'AI Application Competition OSII Week 2025',
    category: 'AI',
    description:
      'Meraih juara 1 AI Application Competition OSII Week 2025 yang diselenggarakan Universitas Katolik Darma Cendika pada November 2025.',
    website: null,
    github: null,
    background: 'pink',
  },
]

export function filterProjects(category) {
  return projects.filter(
    (project) => category === 'Semua' || project.category === category,
  )
}
