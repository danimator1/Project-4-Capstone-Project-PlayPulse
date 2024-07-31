import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './PlayerList.css'

export default function PlayerList() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef()
  
  const navigate = useNavigate()

  useEffect(() => {
    const getPlayers = async () => {
      if (loading || !hasMore) return

      setLoading(true)
      try {
        const response = await axios.get(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true`)
        
        
        if (response.data.items.length === 0) {
          setHasMore(false)
          setLoading(false)
          return
        }

     
        const playerDetails = response.data.items.map(item => item.$ref)
        const playerData = await Promise.all(playerDetails.map(link => axios.get(link).then(res => res.data)))

     
        setPlayers(prev => {
          const prevPlayerIds = new Set(prev.map(player => player.id))
          const newPlayers = playerData.filter(player => !prevPlayerIds.has(player.id))
          return [...prev, ...newPlayers]
        })
        
        
        setHasMore(response.data.items.length > 0)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
      setLoading(false)
    }

    getPlayers()
  }, [loading, hasMore])

 
  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setLoading(true)
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    }
    
    observer.current = new IntersectionObserver(handleIntersection, observerOptions)
    const target = document.querySelector('#load-more-trigger')
    if (target) {
      observer.current.observe(target)
    }

    return () => {
      if (observer.current && target) {
        observer.current.unobserve(target)
      }
    }
  }, [])

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
      <div id="load-more-trigger"></div> 
    </div>
  )
}
