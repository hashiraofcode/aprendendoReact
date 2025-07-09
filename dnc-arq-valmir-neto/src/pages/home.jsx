import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'
import Buttons from '../components/buttonsAplication/button'
import Hero from '../components/Hero/hero'
function Home() {
    return(
        <>
        <Header />
        <BannerComponet image={bannerImageBg} title="About Us"/>
        <h1>Home</h1>
        <Footer />
        </>
    )
}

export default Home