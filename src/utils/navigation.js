export function handleSectionNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return

  const link = event.target.closest?.('a[href^="#"]')
  if (!link) return

  const section = event.currentTarget.ownerDocument.getElementById(
    link.getAttribute('href').slice(1),
  )
  if (!section) return

  event.preventDefault()
  section.scrollIntoView({ block: 'start' })
  section.focus({ preventScroll: true })
}
