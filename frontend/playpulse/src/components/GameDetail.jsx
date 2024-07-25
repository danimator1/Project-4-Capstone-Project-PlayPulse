import PlayerOverviewDetail from "./PlayerOverviewDetail";
import TeamStatsDetail from "./TeamStatsDetail";

export default function GameDetail  ()  {
    return (
           <div className="game-detail">
               <h2> GameDetail </h2>


               <div className="app-playerstat-detail">
               <PlayerOverviewDetail />
              </div>


              <div className="app-teamstat-detail">
               <TeamStatsDetail />
              </div>



           </div>
    )
   }