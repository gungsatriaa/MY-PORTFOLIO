import { Component, lazy, Suspense } from 'react'

const Projects = lazy(() => import('./Projects'))

function ProjectSkeleton() {
  return (
    <div role="status" className="gallery-loading">
      <span className="sr-only">Memuat galeri proyek…</span>
      <div className="skeleton-toolbar skeleton" aria-hidden="true" />
      <div className="projects-grid" aria-hidden="true">
        {[1, 2, 3].map((id) => (
          <div className="skeleton-card skeleton" key={id} />
        ))}
      </div>
    </div>
  )
}

class GalleryErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError)
      return (
        <div className="load-error" role="alert">
          <p>
            Galeri belum berhasil dimuat. Periksa koneksi, lalu muat ulang
            halaman.
          </p>
          <button className="button" onClick={() => window.location.reload()}>
            Muat ulang
          </button>
        </div>
      )
    return this.props.children
  }
}

export default function ProjectGallery() {
  return (
    <div className="gallery">
      <GalleryErrorBoundary>
        <Suspense fallback={<ProjectSkeleton />}>
          <Projects />
        </Suspense>
      </GalleryErrorBoundary>
    </div>
  )
}
