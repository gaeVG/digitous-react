import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = props => {

    return(
        <form onSubmit={props.onSubmit} className="col-12">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Country</label>
                <input type="text" className="form-control" id="countryInput" aria-describedby="countryHelp" placeholder="Enter country" onChange={props.onChange} />
                <small id="countryHelp" className="form-text text-muted">This country cannot be found.</small>
            </div>

            <button type="submit" className="btn btn-primary">Search</button>
        </form>  
    )
}

export default Search