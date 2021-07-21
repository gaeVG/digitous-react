import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

	constructor() {
		super()
	}

	checkInput(str, type) {
		let regex

		switch (type) {
			case "email":
				regex =/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
				break;
			case "password":
				regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z\d]).{6,}$/
				break;
			default:
				return false
		}
		
		return regex.test(str)
	}

	onChange = e => {

		if (!this.checkInput(e.target.value, e.target.type)) {
			if (!e.target.classList.contains("is-invalid")) {
				if (e.target.classList.contains("is-valid")) e.target.classList.remove("is-valid")
					e.target.classList.add("is-invalid")
			}
		} else {
			if (!e.target.classList.contains("is-valid")) {
				if (e.target.classList.contains("is-invalid")) e.target.classList.remove("is-invalid")
					e.target.classList.add("is-valid")
			}
		}
	}
		
	render() {

		return (
			<div class="row">
				<div class="col-6 mx-auto">
					<form>
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
			</div>
		)
	}
}

export default App;
