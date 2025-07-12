import Banner from '../components/Banner/banner.jsx' 
import Header from '../components/Header/Header.jsx'
import ContactForm from '../components/ContactForm/contactform.jsx'
import Footer from '../components/Footer/footer.jsx'
import ImageBanner from '../assets/bg-contact-image.svg'

function Contacts() {
    return(
        <>
        <Header/>
        <Banner image={ImageBanner} title='Contact'/>
        <h1>contato</h1>
        <ContactForm/>
        <Footer />
        </>
    )
}

export default Contacts
