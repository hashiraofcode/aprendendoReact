import '../banner/banner.css'
import BannerImage from '../../assets/bannerImage.svg'
function Banner(props) {
    return (
        <>
            <div className="hero">
                <img src={BannerImage}/>
                <div className="title-hero">
                    {props}
                </div>
            </div>
        </>
    )
}

export default Banner