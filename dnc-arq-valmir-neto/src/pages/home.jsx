import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'
import Button from '../components/buttonsAplication/button'
function Home() {
    return(
        <>
        <Header />
        <Button StyleButton={"primary"}></Button>
        <h1>Home</h1>
        <Footer />
        </>
    )
}

export default Home