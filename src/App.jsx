
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import News from './pages/News'
import ReadArticle from './pages/ReadArticle'
import NavBar from './components/NavBar'
import NoPage from './pages/NoPage'
function App() {


  return (
    <>
    <Header />
    <Routes>
        <Route index element={<News />} />
        <Route path="/" element={<News />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:category" element={<News />} />
        <Route path="/articles/:articleId" element={< ReadArticle/>} /> 
        <Route path="*" element={<NoPage />}/>
    </Routes>
    <NavBar />
    </>
  )
}

export default App
