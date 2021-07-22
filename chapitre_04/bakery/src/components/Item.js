import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = props => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        coucou{props.label}
        <span className="badge badge-primary badge-pill">{props.price}</span>
    </li>
)

export default Item