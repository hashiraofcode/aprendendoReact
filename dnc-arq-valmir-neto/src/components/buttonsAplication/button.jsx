import { Children } from "react"


function Buttons(StyleButton, arrow, loading, children, ...props) {
    return (
        <button className={`button ${StyleButton}`}>
            {children}
        </button>
    )
}

export default Buttons