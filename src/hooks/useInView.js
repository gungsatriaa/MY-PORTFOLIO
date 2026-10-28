import { useEffect, useRef, useState } from 'react'

export function useInView(rootMargin = '0px') {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, isVisible }
}
