import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function teamDetails({ teams }) {
  const [team, setTeam] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedTeam = teams[id]
    setTeam(selectedTeam)
  }, [id, teams])

  return team ? (
    <div className="detail">
    <h2>{team.team.displayName}</h2>
      <p>Location: {team.team.location}</p>
      <img src={team.team.logos[0].href} alt={team.team.displayName} />
      <ul>
        {team.team.links.filter(link => link.text !== "Tickets")
        .map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
          </li>
        ))}
      </ul>
      <Link to="/teamlist">Return to Teams list</Link>
    </div>
  ) : <h3>Finding Team...</h3>
}