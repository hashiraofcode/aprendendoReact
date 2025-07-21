import '../Hero/hero.css'
import { useContext } from 'react'
import Button from '../buttonsAplication/button'
import backgroundImage from "../../assets/bg-hero-image.svg"
import {Link} from 'react-router-dom'

// CONTEXT
import { AppContext } from '../../context/textsContext'

// UTILITS
import { callBackDefaultContent } from '../../utilits/callBackDefaultContent'

function Hero() {
    const dataContext = useContext(AppContext);
    const contentApplication = dataContext?.contentApplication;
    const language = dataContext?.language;
    return (
        <>
            <div className="container">
                <div className="hero flex-container flex-align-center" style={{backgroundImage:`url(${backgroundImage})`}}>
                    <div className="heroContent flex-container flex-direction">
                        <h2 className='text-secundary font-title-oversize'>{callBackDefaultContent(contentApplication,language,'hero','title')}</h2>
                        <p className='font-text'>{callBackDefaultContent(contentApplication,language,'hero','subtitle')}</p>
                        <Link to='/about'>
                         <Button StyleButton={'secundary'} arrow>{callBackDefaultContent(contentApplication,language,'hero','cta')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero