import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowTurnDown,
  faArrowUpRightFromSquare,
  faAsterisk,
  faBars,
  faChevronDown,
  faCode,
  faEllipsis,
  faImage,
  faLocationDot,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Bundle CSS locally so prerender and the browser use the same icon dimensions.
config.autoAddCss = false

const icons = {
  external: faArrowUpRightFromSquare,
  down: faArrowDown,
  turnDown: faArrowTurnDown,
  asterisk: faAsterisk,
  menu: faBars,
  chevron: faChevronDown,
  code: faCode,
  ellipsis: faEllipsis,
  image: faImage,
  location: faLocationDot,
  close: faXmark,
  github: faGithub,
  instagram: faInstagram,
}

export default function Icon({ name, className = '' }) {
  return (
    <FontAwesomeIcon
      icon={icons[name]}
      className={`icon ${className}`}
      aria-hidden="true"
      focusable="false"
    />
  )
}
