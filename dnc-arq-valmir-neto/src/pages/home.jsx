// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/hero'
import ProjectList from '../components/ProjectsList/projectList'

function Home() {
    return(
        <>
        <Header />
        <Hero />
        <ProjectList/>
        <h1>Home</h1>
        <Footer />
        </>
    )
}

export default Home