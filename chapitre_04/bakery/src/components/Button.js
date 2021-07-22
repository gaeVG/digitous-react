import React from "react"


const Button = props => (
	<div className="mb-3">
		<button className="btn btn-primary" onClick={ (e) => {
			this.setState(
				{
					currentRender : "add"
				}
			)
		}
	}>Add</button>
		<button className="btn btn-outline-primary" onClick={ () =>
			this.setState(
				{
					currentRender : "list"
				}
			)
	}>List</button>
		<button className="btn btn-outline-primary" onClick={ () =>
			this.setState(
				{
					currentRender : "pay"
				}
			)
	}>Pay</button>
	</div>
)

export default Button