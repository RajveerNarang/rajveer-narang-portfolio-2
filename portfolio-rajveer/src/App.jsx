// import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route element={<Home />} />
      </Routes>
    </>
  )
}

export default App
