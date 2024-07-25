import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function TeamList() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const getTeams = async () => {
      const response = await axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams`)
      setTeams(response.data.sports[0].leagues[0].teams)
    }
    getTeams()
  }, [])

  let navigate = useNavigate()

  const showTeam = (index) => {
    navigate(`/team/${index}`)
  }

  return (
    <div className="team-list">
      <h2>Teams</h2>
      {
        teams.map((team, index) => (
          <div key={index} onClick={() => showTeam(index)} className="card">
            <h3>{team.team.displayName}</h3> 
          </div>
        ))
      }
    </div>
  )
}
