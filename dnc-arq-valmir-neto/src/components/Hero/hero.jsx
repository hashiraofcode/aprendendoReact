import '../Hero/hero.css'
import Button from '../buttonsAplication/button'
import backgroundImage from "../../assets/bg-hero-image.svg"
import {Link} from 'react-router-dom'


function Hero() {
    return (
        <>
            <div className="container">
                <div className="hero flex-container flex-align-center" style={{backgroundImage:`url(${backgroundImage})`}}>
                    <div className="heroContent flex-container flex-direction">
                        <h2 className='text-secundary font-title-oversize'>Let Your Home <br /> Be Unique</h2>
                        <p className='font-text'>There are many variations of the passages of <br/> lorem Ipsum fromavailable, majority.</p>
                        <Link to='/about'>
                         <Button StyleButton={'secundary'} arrow>Get started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero