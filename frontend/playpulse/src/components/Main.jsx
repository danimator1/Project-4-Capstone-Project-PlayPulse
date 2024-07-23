import Home from './Home'
import User from './User'


export default function Main  ()  {

    return (
    <div className="app-main">
        <h1>Main</h1>

           <div className="app-home">
               <Home />
           </div>

           <div className = "app-user">
                <User />
          </div>



    </div>
           

    )
   }