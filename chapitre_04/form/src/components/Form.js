import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component {
    constructor() {
        super()
    }

    render() {

        return(
            <div class="col-6 mx-auto">
                <form onSubmit>
                    <div class="form-group mb-3">
                        <label class="mb-1" for="input-email">Email address</label>
                        <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange}/>
                    </div>

                    <div class="form-group">
                        <label class="mb-1" for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password" onChange={this.onChange} />
                    </div>
                    
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="remember-me" />
                        <label class="form-check-label" for="remember-me">Remember me</label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form