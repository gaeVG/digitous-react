import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const Card = props => {

    return(
        <div className="col-md-6 col-lg-3">
            <div className="card my-1 p-2">
                <img src={props.flag} className="card-img-top" alt="Pays" />
                
                <div className="card-body">
                    <h5 className="card-title text-center mb-3">Country : {props.name}</h5>

                    <ul className="list-group">
                        <li className="list-group-item list-group-item-secondary bi bi-door-open-fill">
                            &nbsp;Capital : {props.capital}
                        </li>
                        <li className="list-group-item list-group-item-dark bi bi-globe">
                            &nbsp;Region: {props.region}
                        </li>
                        <li className="list-group-item list-group-item-secondary bi bi-people-fill">
                            &nbsp;Population: {props.population}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card