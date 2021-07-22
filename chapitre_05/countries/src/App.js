import React from "react"
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";

class App extends React.Component {
	constructor() {
		super()

		this.state ={
			name : "",
			capital: "",
			flag: "",
			population: "",
			region: ""
		}
	}

	componentDidMount() {
		fetch("https://restcountries.eu/rest/v2/name/france")
			.then(res => res.json())
			.then(data => {
				let country =data[0]

				this.setState({
					name : country.name,
					capital : country.capital,
					flag : country.flag,
					population : country.population,
					region : country.region
				})
			})
	}

	getCountry = e => {
		let country =e.nativeEvent.originalTarget.firstChild.data
		console.log(country)
		fetch(`https://restcountries.eu/rest/v2/name/${country}`)
			.then(res => res.json())
			.then(data => {
				let country =data[0]

				this.setState({
					name : country.name,
					capital : country.capital,
					flag : country.flag,
					population : country.population,
					region : country.region
				})
			})
	}

	render() {
		
		return(
			<div className="row">
				<div className="col-4 mx-auto">
					<Button children="France" onClick={this.getCountry} />
					<Button children="Brazil" onClick={this.getCountry} />
					<Button children="Croatia" onClick={this.getCountry} />
				
					<Card name={this.state.name} capital={this.state.capital} region={this.state.region} population={this.state.population} flag={this.state.flag} />
				</div>
			</div>
		)
	}
}

export default App;
