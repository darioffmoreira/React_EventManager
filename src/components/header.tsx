import eventIcon from '../assets/event-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={eventIcon} alt="" />

      <nav className="flex items-center gap-5">
        <NavLink>Events</NavLink>
        <NavLink>Participants</NavLink>
      </nav>

    </div>
  )
}