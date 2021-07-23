import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = props => {

    return(
        <form onSubmit={props.onSubmit} className="col-3 mx-auto mb-5">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Country</label>
                <input type="text" className="form-control" id="countryInput" aria-describedby="countryHelp" placeholder="Enter country" onChange={props.onChange} />
            </div>
        </form>  
    )
}

export default Search