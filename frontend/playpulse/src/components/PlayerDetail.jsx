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
        const response = await axios.get(`http://localhost:8000/funfacts/?entity_type=Player&entity_id=${id}`)
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={player.headshot.href} alt={player.fullName} className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <h3>{player.fullName}</h3>
          <p><strong>Position:</strong> {player.position.displayName}</p>
          <p><strong>Height:</strong> {player.displayHeight}</p>
          <p><strong>Weight:</strong> {player.displayWeight}</p>
          <p><strong>Age:</strong> {player.age}</p>
          <p><strong>Birthplace:</strong> {player.birthPlace.city}, {player.birthPlace.state}</p>
          <Link to="/playerlist" className="btn btn-primary">Return to Player List</Link>
        </div>
      </div>
      <div className="mt-4">
        <FunFactForm playerId={id} onFunFactSubmit={handleFunFactSubmit} />
        <h4 className="mt-4">Fun Facts</h4>
        <ul className="list-unstyled">
          {funFacts.map((fact) => (
            <li key={fact.id} className="mb-3 d-flex justify-content-between align-items-center">
              <span>{fact.text}</span>
              <button className="btn btn-danger btn-sm" onClick={() => handleDeleteFunFact(fact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <h3>Finding Player...</h3>
  )
  
}
