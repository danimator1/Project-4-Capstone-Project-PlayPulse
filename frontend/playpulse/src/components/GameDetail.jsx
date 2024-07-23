import PlayerStatsDetail from "./PlayerStatsDetail";
import TeamStatsDetail from "./TeamStatsDetail";

export default function GameDetail  ()  {
    return (
           <div className="game-detail">
               <h2> GameDetail </h2>


               <div className="app-playerstat-detail">
               <PlayerStatsDetail />
              </div>


              <div className="app-teamstat-detail">
               <TeamStatsDetail />
              </div>



           </div>
    )
   }