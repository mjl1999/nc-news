import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import Profile from './pages/Profile'
import Users from './pages/Users'
import Favourites from './pages/Favourites'
import ReadArticle from './pages/ReadArticle'
import NavBar from './components/NavBar'
function App() {


  return (
    <>
    <Header />
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/articles/:articleId" element={< ReadArticle/>} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/users" element={<Users />} />
    </Routes>
    <NavBar />
    
    </>
  )
}

export default App
