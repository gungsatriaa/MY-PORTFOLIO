import Icon from './components/Icon'
import { useEffect, useRef, useState } from 'react'
import { profile } from './data/portfolio'
import portrait from './assets/gungsatria.webp'
import ProjectGallery from './components/ProjectGallery'
import Reveal from './components/Reveal'
import Journey from './components/Journey'
import RunningText from './components/RunningText'
import { handleSectionNavigation } from './utils/navigation'
import './App.css'

const navigation = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#karya', label: 'Proyek' },
  { href: '#perjalanan', label: 'Pengalaman' },
  { href: '#kontak', label: 'Kontak' },
]

function App({ staticProjects = null }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname + window.location.search,
      )
    }
  }, [])

  return (
    <div onClick={handleSectionNavigation}>
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && menuOpen) {
            setMenuOpen(false)
            menuButtonRef.current?.focus()
          }
        }}
      >
        <div className="container header-inner">
          <a
            href="#beranda"
            className="wordmark"
            aria-label={`${profile.name}, beranda`}
          >
            GUNG SATRIA
          </a>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Tutup' : 'Menu'}{' '}
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
          <nav
            id="main-nav"
            className={menuOpen ? 'navigation is-open' : 'navigation'}
            aria-label="Navigasi utama"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-social"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true"><Icon name="external" /></span>
              <span className="sr-only"> (tab baru)</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section
          className="hero container"
          id="beranda"
          tabIndex={-1}
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="hello">
              <span className="hello-mark" aria-hidden="true">
                <Icon name="asterisk" />
              </span>{' '}
              Halo, saya {profile.name}.
            </p>
            <h1 id="hero-title">
              <span className="hero-line">Web Developer.</span>{' '}
              <span className="hero-line">Software</span>{' '}
              <span className="hero-line outlined-text">Developer.</span>
            </h1>
            <p className="hero-description">
              Saya Gung Satria, Web Developer dan Software Developer dari Ubud,
              Bali. Berfokus pada pengembangan website dan perangkat lunak yang
              sesuai kebutuhan pengguna.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#karya">
                Lihat proyek <span aria-hidden="true"><Icon name="down" /></span>
              </a>
              <a className="text-link" href="#kontak">
                Diskusikan kebutuhan <span aria-hidden="true"><Icon name="external" /></span>
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit-label">Web & software.</div>
            <div className="identity-card">
              <div className="card-bar">
                <span>Portofolio profesional</span>
                <span aria-hidden="true"><Icon name="ellipsis" /></span>
              </div>
              <div className="portrait-stage">
                <img
                  className="hero-portrait"
                  src={portrait}
                  alt={`Foto profil ${profile.fullName}`}
                  width="1079"
                  height="1457"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <span
                  className="portrait-note portrait-note-code"
                  aria-hidden="true"
                >
                  <Icon name="code" />
                </span>
                <span
                  className="portrait-note portrait-note-flow"
                  aria-hidden="true"
                >
                  PHP <Icon name="external" />
                </span>
                <span className="art-star" aria-hidden="true">
                  <Icon name="asterisk" />
                </span>
              </div>
              <div className="identity-caption">
                <span>{profile.name}</span>
                <span aria-hidden="true"><Icon name="external" /></span>
              </div>
            </div>
            <span className="art-sticker">
              Dari ide
              <br />
              <strong>ke implementasi.</strong>
            </span>
          </div>
          <div className="hero-bottom">
            <span>Web & software development / Ubud, Bali</span>
            <a href="#tentang">
              Tentang saya <span aria-hidden="true"><Icon name="down" /></span>
            </a>
          </div>
        </section>

        <RunningText />

        <section
          className="section container about"
          id="tentang"
          tabIndex={-1}
          aria-labelledby="about-title"
        >
          <Reveal className="section-intro">
            <p className="section-label">Profil profesional</p>
            <h2 id="about-title">
              Tentang
              <br />
              Gung Satria.
            </h2>
            <div className="hand-note">
              Fokus dan latar belakang <span aria-hidden="true"><Icon name="turnDown" /></span>
            </div>
          </Reveal>
          <Reveal className="about-content" stagger>
            <p className="large-copy">
              Saya {profile.fullName}, biasa dipanggil Gung Satria. Fokus saya
              adalah pengembangan website dan perangkat lunak untuk menjawab
              kebutuhan digital dengan solusi yang terarah.
            </p>
            <p>
              Saya memimpin PT. Digisite Kreatif Indonesia dan menempuh Software
              Engineering di Universitas Telkom. Pengalaman saya mencakup proyek
              website sekolah serta magang pengembangan perangkat lunak di PT.
              Teknologi Arcom Mediaksa.
            </p>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kenali pengalaman saya di LinkedIn{' '}
              <span aria-hidden="true"><Icon name="external" /></span>
              <span className="sr-only"> (tab baru)</span>
            </a>
            <div className="about-facts">
              <span><Icon name="location" /> {profile.location}</span>
              <span>Software Engineering · Universitas Telkom</span>
            </div>
          </Reveal>
        </section>

        <section
          className="work-section"
          id="karya"
          tabIndex={-1}
          aria-labelledby="work-title"
        >
          <div className="container section">
            <Reveal className="work-heading">
              <div>
                <p className="section-label">
                  Pengembangan web & perangkat lunak
                </p>
                <h2 id="work-title">
                  Proyek & inisiatif<span className="heading-dot">.</span>
                </h2>
              </div>
              <p>
                Proyek web, usaha digital, dan pencapaian teknis.
                <br className="desktop-break" /> Lihat peran dan fokus saya pada
                setiap kegiatan.
              </p>
            </Reveal>
            {staticProjects ?? <ProjectGallery />}
            <p className="work-footnote">
              Lihat gambar untuk memperbesar tampilan proyek. Tautan website dan
              repositori tersedia pada proyek yang sudah dilengkapi.
            </p>
          </div>
        </section>

        <Journey />

        <section
          className="contact-section"
          id="kontak"
          tabIndex={-1}
          aria-labelledby="contact-title"
        >
          <Reveal className="container contact-content" stagger>
            <p className="section-label">Kolaborasi & peluang profesional</p>
            <h2 id="contact-title">
              Mari bahas
              <br />
              proyek Anda<span aria-hidden="true"><Icon name="asterisk" /></span>
            </h2>
            <div className="contact-bottom">
              <p>
                Ceritakan kebutuhan website atau perangkat lunak Anda.
                <br />
                Hubungi saya untuk membahas ruang lingkup dan langkah
                berikutnya.
              </p>
              <div className="contact-links">
                <a
                  className="button button-yellow"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diskusi via LinkedIn <span aria-hidden="true"><Icon name="external" /></span>
                  <span className="sr-only"> (tab baru)</span>
                </a>
                <a
                  className="button"
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @gungsatriaaa0 (tab baru)"
                >
                  <Icon name="instagram" />
                  @gungsatriaaa0
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="container site-footer">
        <p>© 2026 Gung Satria. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
