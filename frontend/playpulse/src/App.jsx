import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'

export default function App() {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [overviews, setOverviews] = useState([])

  useEffect(() => {
    const getTeams = async () => {
      const response = await axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
      console.log('data', response)
      setTeams(response.data.sports[0].leagues[0].teams)
    }
    getTeams()
  }, [])

  useEffect(() => {
        const getPlayers = async () => {
          const response = await axios.get('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true')
          console.log('data', response)
          setPlayers(response.data.items)
        }
        getPlayers()
      }, [])

      useEffect(() => {
        const getOverviews = async () => {
          const response = await axios.get('https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/overview')
          console.log('data', response)
          setOverviews(response.data.news)
        }
        getOverviews()
      }, [])

  return (
    <div className="app">
      <div className="app-nav">
        <Nav />
      </div>

      <div className="app-main">
        <Main teams={teams}
            players={players} 
          overviews={overviews}/>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
