import Icon from './Icon'
import { useEffect, useId, useRef } from 'react'

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const backdropPress = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!open) return

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    dialog.showModal()

    return () => {
      document.documentElement.style.overflow = previousOverflow
      dialog.close()
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby={titleId}
      onClose={() => {
        // StrictMode may queue a close event before reopening the same dialog.
        if (!dialogRef.current.open) onClose()
      }}
      onPointerDown={(event) => {
        backdropPress.current = event.target === event.currentTarget
      }}
      onClick={(event) => {
        if (backdropPress.current && event.target === event.currentTarget) {
          dialogRef.current.close()
        }
      }}
    >
      <div className="modal-panel">
        <header className="modal-header">
          <h2 id={titleId}>{title}</h2>
          <button
            className="modal-close"
            type="button"
            aria-label="Tutup modal"
            onClick={() => dialogRef.current.close()}
            autoFocus
          >
            <span aria-hidden="true"><Icon name="close" /></span>
          </button>
        </header>
        <div className="modal-content">{children}</div>
      </div>
    </dialog>
  )
}
