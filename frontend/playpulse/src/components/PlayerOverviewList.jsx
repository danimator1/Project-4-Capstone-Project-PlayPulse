import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function TeamList() {
  const [overviews, setOverviews] = useState([])
  
  useEffect(() => {
    const getOverviews = async () => {
        const response = await axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/overview`)
        setOverviews(response.data.news || [])
    }
    getOverviews()
  }, [])

  let navigate = useNavigate()

  const showOverview = (index) => {
    navigate(`/team/${index}`)
  }

  return (
    <div className="team-list">
      <h2>Player News</h2>
      {
        overviews.map((overview, index) => (
          <div key={index} onClick={() => showOverview(index)} className="card">
            <h3>{overview.headline}</h3> 
          </div>
        ))
      }
    </div>
  );
}
