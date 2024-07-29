import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import FunFactForm from "./FunFactForm"

export default function PlayerDetail() {
  const [player, setPlayer] = useState(null)
  const [funFacts, setFunFacts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/${id}?lang=en&region=us`
        )
        setPlayer(response.data)
      } catch (error) {
        console.error("Error fetching player details:", error)
      }
    }

    const fetchFunFacts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/funfacts/?player_id=${id}`)
        setFunFacts(response.data)
      } catch (error) {
        console.error("Error fetching fun facts:", error)
      }
    }

    fetchPlayer()
    fetchFunFacts()
  }, [id])

  const handleFunFactSubmit = (newFunFact) => {
    setFunFacts((prevFunFacts) => [...prevFunFacts, newFunFact])
  }

  const handleDeleteFunFact = async (funFactId) => {
    try {
      await axios.delete(`http://localhost:8000/funfacts/${funFactId}`)
      setFunFacts((prevFunFacts) => prevFunFacts.filter((fact) => fact.id !== funFactId))
    } catch (error) {
      console.error("Error deleting fun fact:", error)
    }
  }

  return player ? (
    <div className="detail">
      <h3>{player.fullName}</h3>
      <img src={player.headshot.href} alt={player.fullName} />
      <p>Position: {player.position.displayName}</p>
      <p>Height: {player.displayHeight}</p>
      <p>Weight: {player.displayWeight}</p>
      <p>Age: {player.age}</p>
      <p>
        Birthplace: {player.birthPlace.city}, {player.birthPlace.state}
      </p>
      <Link to="/playerlist">Return to Player List</Link>
      <FunFactForm playerId={id} onFunFactSubmit={handleFunFactSubmit} />
      <h4>Fun Facts</h4>
      <ul>
        {funFacts.map((fact) => (
          <li key={fact.id}>
            {fact.text}
            <button onClick={() => handleDeleteFunFact(fact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h3>Finding Player...</h3>
  )
}
