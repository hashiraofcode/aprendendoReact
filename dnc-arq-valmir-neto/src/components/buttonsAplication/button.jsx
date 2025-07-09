import "../buttonsAplication/button.css"
import ArrowImage from '../../assets/whiteArrow.svg'

function Buttons({StyleButton, arrow, loading, children, ...props}) {
    return (
        <button className={`button ${StyleButton}`} {...props}>
            {children} {arrow && <img src={ArrowImage}/>}
        </button>
    )
}

export default Buttons