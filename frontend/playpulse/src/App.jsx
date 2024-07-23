import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app">
 
        <div className = "app-nav">
                <Nav />
        </div>

        <div className = "app-main">
                <Main />
        </div>

        <div className = "app-footer">
                <Footer />
        </div>
    </div>
  )
}
