import "../loadingSpinner/loadingSpinner.css"
import loadingGif from '../../assets/loadingGif.gif'

function LoadingSpinner () {
    return (
        <div className="loading-container flex-container jc-center flex-align-center">
             <img src={loadingGif} alt="" />
        </div>
    )
}

export default LoadingSpinner