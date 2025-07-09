import '../Hero/hero.css'
import Button from '../buttonsAplication/button'
function Hero() {
    return (
        <>
            <div className="container">
                <div className="hero">
                    <div className="heroContent">
                        <h2>Let Your Home <br /> Be Unique</h2>
                        <p>There are many variations of the passages of <br/> lorem Ipsum fromavailable, majority.</p>
                        <Button StyleButton={'secundary'} arrow>Get started</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero