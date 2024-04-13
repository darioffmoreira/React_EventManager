import eventIcon from '../assets/event-icon.svg'

export function Header() {
  return (
    <div>
      <img src={eventIcon} alt="" />
      <nav>
        <a href="">Events</a>
        <a href="">Participants</a>
      </nav>
    </div>
  )
}