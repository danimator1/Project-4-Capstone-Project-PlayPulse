import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PlayerList() {
  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  
  useEffect(() => {
    const getPlayers = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=20&offset=${(page - 1) * 20}&active=true`)
        const playerDetails = response.data.items.map(item => item.$ref)
        const playerData = await Promise.all(playerDetails.map(link => axios.get(link).then(res => res.data)))
        setPlayers(prev => [...prev, ...playerData])
        setHasMore(response.data.items.length > 0)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
      setLoading(false)
    }

    getPlayers()
  }, [page])

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1)
    }
  }

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
      {loading && <p>Loading...</p>}
      {hasMore && !loading && <button onClick={loadMore}>Load More</button>}
    </div>
  )
}
