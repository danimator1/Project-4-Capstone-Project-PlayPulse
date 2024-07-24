import { useNavigate } from 'react-router-dom'

export default function TeamList({ teams }) {
  const navigate = useNavigate()

  const showTeam = (index) => {
    navigate(`/teams/${index}`)
  }

  return (
    <div className="team-list">
      <h2>TeamList</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index} onClick={() => showTeam(index)}>
            {team.team.displayName}
          </li>
        ))}
      </ul>
      <div className="app-team-detail">
        {/* Include details if necessary */}
      </div>
    </div>
  )
}
