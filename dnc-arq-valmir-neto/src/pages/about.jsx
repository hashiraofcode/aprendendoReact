import BannerComponet from '../components/Banner/banner.jsx'
import bannerImageBg from '../assets/bg-about-image.svg'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'
import AboutContent from '../components/About/about'

function About() {
    return (
        <>
            <Header />
            <BannerComponet image={bannerImageBg} title='About' />
            <AboutContent/>
            <Footer />
        </>
    )
}

export default About