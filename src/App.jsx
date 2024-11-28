import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Loyiha from './page/Loyiha/Loyiha'
import Contact from './page/Contact/Contact'


function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/loyiha' element={<Loyiha />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App