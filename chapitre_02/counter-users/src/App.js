import './App.css';
import React from 'react';
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'

const data =require("./users.json")

class App extends React.Component {

	constructor() {
		super()

		this.state ={
			counter :10
		}
	}

	render() {

		return (
			<div>
				<Counter counter={this.state.counter} add={
					() => {
							this.setState({ counter : this.state.counter +1 }) 
					}
				} subtract={
					() => {
						if (this.state.counter > 0) {
							this.setState({ counter : this.state.counter -1 })
						}
					}
				} />

				{
					data.map(user => {
						return (
							user.id <= this.state.counter ? <UserInfo user={user.name} username={user.username} email={user.email} /> : null
						)
					})
				}
			</div>
		)
	}
}

export default App;
