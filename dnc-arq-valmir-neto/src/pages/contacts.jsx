import BannerComponet from '../components/Banner/banner.jsx'
import Header from '../components/Header/Header.jsx'
import ContactForm from '../components/ContactForm/contactform.jsx'
import Footer from '../components/Footer/footer.jsx'
import ImageBanner from '../assets/bg-contact-image.svg'

function Contacts() {
    return (
        <>
            <Header />
            <BannerComponet image={ImageBanner} title='Contact' />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contacts
