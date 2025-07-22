import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contacts from './pages/contacts'

//utilits
import ScrollToTop from './utilits/scrollToTop'

// CONTEXT
import { AppContext } from './context/textsContext'
import { useContext } from 'react'
// LOADING 
import Loading from './components/loadingSpinner/loadingSpinner'



function App() {
const dataContext = useContext(AppContext);
const loadingThisContent = dataContext?.loadingThisContent;


// carregamento
if (loadingThisContent) {
  return <Loading/>
}

  return (
      <>
      <Router>
        <ScrollToTop/>
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
