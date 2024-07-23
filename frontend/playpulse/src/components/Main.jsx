import GameList from './GameList'
import Home from './Home'
import QueryList from './QueryList'
import SportList from './SportList'
import TeamList from './TeamList'
import UserList from './UserList'



export default function Main  ()  {

    return (
    <div className="app-main">

           <div className="app-home">
               <Home />
           </div>
           
           <div className = "app-user">
                <UserList />
          </div>

          <div className = "app-sport">
                <SportList />
          </div>

          <div className = "app-team">
                <TeamList />
          </div>

          <div className = "app-game">
                <GameList />
          </div>

          <div className = "app-query">
                <QueryList />
          </div>




    </div>
           

    )
   }