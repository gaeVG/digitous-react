import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
	{
		name :"croissant",
		label : "croissant",
		price : 0.8
	},
	{
		name :"coffee",
		label : "café",
		price : 1.5
	},
	{
		name : "cake",
		label : "cake",
		price : 2
	}
]

class App extends React.Component {

	constructor() {
		super()

		this.state = {
			currentRender :"add",
			cart : {}
		}
	}

	handleChange = e => {

		if (e.target.value) {

			for (let i = 0; i < items.length; i++) {
				let item = items[i]

				if (item.name !== e.target.value) {

					if (!e.target.classList.contains("is-invalid")) {
						if (e.target.classList.contains("is-valid")) e.target.classList.remove("is-valid")
							e.target.classList.add("is-invalid")
							document.getElementById("amount").disabled = true
							break;
					}
				} else {
					if (!e.target.classList.contains("is-valid")) {
						if (e.target.classList.contains("is-invalid")) e.target.classList.remove("is-invalid")
							e.target.classList.add("is-valid")
							document.getElementById("amount").disabled = false
							break
					}
				}
			}
		}
	}

	handleSubmit = e => {
		e.preventDefault();

		let currentRender;
		
		switch (e.nativeEvent.submitter.id) {
			case "add":
			case "list":
			case "pay":
				currentRender = e.nativeEvent.submitter.id;
				break;
			default:
				break;
		}

		if (currentRender !== undefined)

			this.setState((prevState) => {
				return({
					...prevState,
					currentRender : currentRender
				})
			})
	}

	renderAdd = () => {

		return(

			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text" id="">Item name</span>
				</div>

				<input type="text" className="form-control" onChange={this.handleChange} placeholder="Choose item" />

				<button className="btn btn-primary">Add</button>
				<input type="range" id="amount" className="form-range mt-3" max="10" min="1" disabled />
				<datalist id="amount">
					<option value="0" label="0%" />
					<option value="1" />
					<option value="2" />
					<option value="3" />
					<option value="4" />
					<option value="5" label="50%" />
					<option value="6" />
					<option value="7" />
					<option value="8" />
					<option value="9" />
					<option value="10" label="100%" />
			  	</datalist>
			</div>
		)
	}

	renderList = () => {

		return(

			<div className="mt-5">
				<h4>Panier :</h4>
				<ul className="list-group">
					{
						items.map( item => {
							return (
									<li className="list-group-item d-flex justify-content-between align-items-center">
										{item.label}
										<span>14</span>
									</li>
							)
						})	
					}
				</ul>
			</div>
		)
	}

	render()  {
		let currentRender

		switch(this.state.currentRender) {
			case "list":
				currentRender =this.renderList;
				break
			default:
				currentRender =this.renderAdd;
		}

		return (
			<div className="row">
				<div className="col-4 mx-auto">
					<h2>Bakery</h2>

					<form onSubmit={this.handleSubmit}>
						<div className="mb-3">

							<button id="add" className="btn btn-primary" onClick={ (e) => {
									this.setState( prevState => {
										return({
											...prevState,
											currentRender : "add"
										})
									})
								}
							}>Add</button>

							<button id="list" className="btn btn-outline-primary" onClick={ () =>
									this.setState( prevState => {
										return({
											...prevState,
											currentRender : "list"
										})
									})
							}>List</button>

							<button id="pay" className="btn btn-outline-primary" onClick={ () =>
									this.setState( prevState => {
										return({
											...prevState,
											currentRender : "pay"
										})
									})
							}>Pay</button>

						</div>

						{currentRender()}
					</form>
				</div>
			</div>
		);
	}
}

export default App;
