import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {
  return (
    <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App