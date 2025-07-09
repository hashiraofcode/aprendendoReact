import { Link } from 'react-router-dom'
import logo from '../../assets/logo-dnc.svg'
import '../Header/Header.css'
function Header() {
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

                <nav className='flex-container flex-align-center flex-grow'>
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
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}

export default Header