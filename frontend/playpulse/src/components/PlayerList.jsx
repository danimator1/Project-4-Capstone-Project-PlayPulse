import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PlayerList() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true')
      const playerLinks = response.data.items.map(item => item.$ref)
      const playerDetails = await Promise.all(playerLinks.map(link => axios.get(link).then(res => res.data)))
      setPlayers(playerDetails)
    }
    getPlayers()
  }, [])

  let navigate = useNavigate()

  const showPlayer = (id) => {
    navigate(`/player/${id}`)
  }

  return (
    <div className="player-list">
      <h2>Players</h2>
      {players.map((player) => (
        <div key={player.id} onClick={() => showPlayer(player.id)} className="card">
          <h3>{player.fullName}</h3>
        </div>
      ))}
    </div>
  )
}
