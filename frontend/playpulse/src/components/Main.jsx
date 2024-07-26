import { Route, Routes } from 'react-router-dom'
import GameList from './GameList'
import Home from './Home'
import QueryList from './QueryList'
import SportList from './SportList'
import TeamList from './TeamList'
import TeamDetail from './TeamDetail'
import UserList from './UserList'
import PlayerList from './PlayerList'
import PlayerDetail from './PlayerDetail'
import PlayerOverviewList from './PlayerOverviewList'


export default function Main(props) {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teamlist" element={<TeamList teams={props.teams} />} />
        <Route path="/team/:id" element={<TeamDetail teams={props.teams} />} />
        <Route path="/playerlist" element={<PlayerList />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
        <Route path="/playeroverviewlist" element={<PlayerOverviewList />} />
      </Routes>
    </div>
  )
}
