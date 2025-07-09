import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'
import Buttons from '../components/buttonsAplication/button'
function Home() {
    return(
        <>
        <Header />
        <Buttons StyleButton="primary" arrow> olá</Buttons>
        <h1>Home</h1>
        <Footer />
        </>
    )
}

export default Home