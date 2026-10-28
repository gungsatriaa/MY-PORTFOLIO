import { useState } from 'react'

export default function LazyImage({ src, alt }) {
  const [status, setStatus] = useState(() =>
    typeof window === 'undefined' ? 'loaded' : 'loading',
  )
  return (
    <div className={`image-frame ${status === 'loading' ? 'skeleton' : ''}`}>
      {status === 'error' ? (
        <p className="image-error">Gambar belum dapat dimuat.</p>
      ) : (
        <img
          src={src}
          alt={alt}
          width="720"
          height="480"
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={status === 'loaded' ? 'image-loaded' : 'image-loading'}
        />
      )}
    </div>
  )
}
