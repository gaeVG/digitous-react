import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const Card = props => {

    return(
        <div className="col-6">
            <div className="card">
                <img src={props.flag} className="card-img-top" alt="Pays" />
                
                <div className="card-body">
                    <h5 className="card-title">Country : {props.name}</h5>
                    <h6>Capital : {props.capital}</h6>

                    <p className="bi bi-globe"> {props.region}</p>
                    <p className="bi bi-people-fill"> {props.population}</p>
                </div>
            </div>
        </div>
    )
}

export default Card