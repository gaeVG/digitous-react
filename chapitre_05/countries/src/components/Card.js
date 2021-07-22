import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const Card = props => {

    return(

        <div class="card">
            <img src={props.flag} className="card-img-top" alt="Pays" />
            
            <div className="card-body">
                <h5 className="card-title">Country : {props.name}</h5>
                <h6>Capital : {props.capital}</h6>

                <p class="bi bi-globe"> {props.region}</p>
                <p class="bi bi-people-fill"> {props.population}</p>
            </div>
        </div>
    )
}

export default Card