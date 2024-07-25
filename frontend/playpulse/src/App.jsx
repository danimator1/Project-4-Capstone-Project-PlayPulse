import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'

export default function App() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const getTeams = async () => {
      const response = await axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
      console.log('data', response)
      setTeams(response.data.sports[0].leagues[0].teams)
    }
    getTeams()
  }, [])

  

  return (
    <div className="app">
      <div className="app-nav">
        <Nav />
      </div>

      <div className="app-main">
        <Main teams={teams} />
      </div>

      <div className="app-footer">
        <Footer />
      </div>
    </div>
  )
}
