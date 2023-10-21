import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './components/Header'
import About from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
      </BrowserRouter>
     </>
  )
}

export default App