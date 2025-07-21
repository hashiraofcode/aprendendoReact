import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import logo from '../../assets/logo-dnc.svg'
import '../Header/Header.css'
import ButtonMenu from '../buttonsAplication/button'

//CONTEXTO
import { AppContext } from '../../context/textsContext'

// UTILITS
import { callBackDefaultContent } from '../../utilits/callBackDefaultContent'

function Header() {
const contextData = useContext(AppContext);
const contentApplication = contextData?.contentApplication;
const language = contextData?.language;
    


    const [isOpen,setOpen] = useState(false);


    return (
        <>
        <div className="container">
              <header className='flex-container jc-space-between'>
                <Link to='/' aria-label='back to home'>
                    <h1 className='flex-container flex-direction'>
                        <img src={logo} alt="logo-dnc" />
                        <span className='image-replaciment' tabIndex='1'>DNC</span>
                    </h1>
                </Link>
                <div className="menu-mobile-button">
                     <ButtonMenu StyleButton={"secundary"} onClick={()=> setOpen(!isOpen)}>Menu</ButtonMenu>
                </div>
                <nav className={`flex-container flex-align-center flex-grow ${isOpen? 'open' : '' }`}>
                    <div className="menu-mobile-button">
                        <ButtonMenu StyleButton={'unstyle'} onClick={()=> setOpen(!isOpen)} >X</ButtonMenu>
                    </div>
                    <ul className='flex-container flex-grow jc-end'>
                        <li>
                            <Link to='/'>{callBackDefaultContent(contentApplication,language,'menu', 'home')}</Link>
                        </li>
                        <li>
                            <Link to='/about'>{callBackDefaultContent(contentApplication,language,'menu', 'about')}</Link>
                        </li>
                        <li>
                            <Link to='/projects'>{callBackDefaultContent(contentApplication,language,'menu', 'projects')}</Link>
                        </li>
                        <li>
                            <Link to='/contact'>{callBackDefaultContent(contentApplication,language,'menu', 'contact')}</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}

export default Header