import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

import  HomePage  from "../src/components/HomePage/HomePage"
import Started from "../src/components/Started/Started"
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'


function App() {

  return (
  <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/started' element={<Started />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
  </div>
  )
}

export default App
