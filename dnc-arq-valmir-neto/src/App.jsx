import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contacts from './pages/contacts'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contacts />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
