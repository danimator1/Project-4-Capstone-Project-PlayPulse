import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/teamlist">Teams</Link></li>
        <li><Link to="/playerlist">Players</Link></li>
        <li><Link to="/playeroverviewlist">Players News</Link></li>
        {/* Add other links as needed */}
      </ul>
    </nav>
  )
}
