import { useInView } from '../hooks/useInView'

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  stagger = false,
}) {
  const { ref, isVisible } = useInView('0px 0px -24px 0px')
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible={isVisible}
      data-stagger={stagger || undefined}
    >
      {children}
    </Tag>
  )
}
