import './banner.css'

function Banner(props) {
    return (
        <>
            <div className="banner flex-container jc-center flex-align-end" style={{backgroundImage:` url(${props.image})`}}>
                <div className="title-banner font-other-titles text-secundary flex-container jc-center flex-align-center">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default Banner