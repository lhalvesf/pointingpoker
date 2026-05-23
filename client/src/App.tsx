

import { Navbar } from './components/Navbar' 
import { Routes, Route } from 'react-router'

import { Home } from './pages/Home'
import { Votation } from './pages/Votation'
import { CreateSession } from './pages/CreateSession'

import './app.css'

function App() {
  return (
    <div id="app-wrapper">
      <Navbar />
      <div id="app-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/votation' element={<Votation />} />
          <Route path='/create-session' element={<CreateSession />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
