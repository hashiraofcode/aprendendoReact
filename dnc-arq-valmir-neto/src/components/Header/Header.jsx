import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo-dnc.svg'
import '../Header/Header.css'
import ButtonMenu from '../buttonsAplication/button'
function Header() {
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
                <ButtonMenu StyleButton={"secundary"} onClick={()=> setOpen(!isOpen)}>Menu</ButtonMenu>
                <nav className={`flex-container flex-align-center flex-grow ${isOpen? 'open' : '' }`}>
                    <ul className='flex-container flex-grow jc-end'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About us</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}

export default Header