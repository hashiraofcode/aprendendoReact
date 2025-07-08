import '../Footer/footer.css'
import { Link } from 'react-router-dom'
// assets
import facebookLogo from '../../assets/facebook.svg'
import instagramLogo from '../../assets/instagram.svg'
import linkeldnLogo from '../../assets/linkeldn.svg'
import twiterLogo from '../../assets/twiter.svg'
import dncLogo from '../../assets/logo-dnc.svg'
import brazilianFlag from '../../assets/coutry-Brazilian-flag.svg'
import UsaFlag from '../../assets/coutry-USA-Flag.svg'

function Footer() {
    return (
        <>
            <footer className='flex-container flex-align-center flex-wrap'>
                <div className="content-footer flex-container flex-align-center flex-wrap">
                         <div className='logo-socialMedia-container flex-container flex-direction flex-children max-width-30rem '>
                    <img src={dncLogo} alt="Logo Dnc" />
                    <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className="social-media flex-container">
                        <img src={facebookLogo} alt="logo do facebook" aria-label='button social media' /><img src={twiterLogo} alt="logo do twiter" aria-label='button social media' /><img src={linkeldnLogo} alt="logo do linkeldn" aria-label='button social media' /><img src={instagramLogo} alt="logo do instagram" aria-label='button social media' />
                    </div>
                </div>
                <div className='links-container flex-children flex-container flex-direction jc-center flex-wrap'>
                    <h5 className='align-center trasform-text small-titles'>pages</h5>
                    <ul className='links-list flex-container flex-direction jc-center'>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about <span>us</span></Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="adress-container flex-children max-width-20rem flex-container flex-direction jc-center">
                    <h5 className=' trasform-text small-titles'>contact</h5>
                    <address className='flex-container flex-direction jc-center'>
                        <p>
                            R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030
                        </p>
                        <p>suporte@escoladnc.com.br</p>
                        <p>(19) 99187-4342</p>
                    </address>
                </div>
                </div>
                <div className="footer-languages-credits flex-container jc-space-between flex-wrap">
                    <p>Copyright  &copy; DNC - 2024 </p>
                    <div className="coutry-flag">
                        <img src={brazilianFlag} alt="brazilian" aria-label='Select your language "Portugues Brazilian"' />
                        <img src={UsaFlag} alt="United States" aria-label='Select your language "Inglish"' />
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer