import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbaar from './components/Navbaar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbaar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Add" element={<Add/>}/>
    </Routes>
    </>
  )
}

export default App
