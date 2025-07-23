import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'
import ProjectList from '../components/ProjectsList/projectList'
import BannerComponet from '../components/Banner/banner.jsx'
import bannerImageBg from '../assets/bg-projects-image.svg'

function Projects() {
    return(
        <>
        <Header />
        <BannerComponet image={bannerImageBg} title='Projects' />
        <ProjectList />
        <Footer />
        </>
    )
}

export default Projects