import { useEffect } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Feed from './pages/Feed.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

useEffect(() => {
    async function getData() {
        const response = await fetch('http://localhost:3000/api/posts')
        const data = await response.json()
        console.log(data)
    }
    getData()
}, [])

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
    </Routes>
    </>
  )
}

export default App
