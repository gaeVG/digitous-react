import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = props => {

    return(
        <button className="btn btn-primary mx-4" onClick={props.onClick}>
            {props.children}
        </button>  
    )
}

export default Button