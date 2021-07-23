import React from "react"
import './App.css';
import Search from "./components/Search";
import Card from "./components/Card";

class App extends React.Component {
	constructor() {
		super()

		this.state ={
			countries : undefined,
			search : undefined
			
		}
	}

	componentDidMount = () => {

		if (this.state.countries === undefined && this.state.countries === undefined) {

			fetch("http://82.64.247.20:3636/all")
				.then(res => res.json())
				.then(countries => {

					this.setState({
						countries : countries
					})
				})
				.catch(e => {
					console.log(e)
				})
		}
	}

	getCountry = e => {
		let country =e.nativeEvent.originalTarget.firstChild.data

		fetch(`http://82.64.247.20:3636/country/${country}`)
			.then(res => res.json())
			.then(country => {

				this.setState({
					name : country.name,
					capital : country.capital,
					flag : country.flag,
					population : country.population,
					region : country.region
				})
			})
			.catch(e => {
				console.log(e)
			})
	}

	handleChange = e => {

		if (e.nativeEvent.originalTarget.id === "countryInput") {
			let input =e.nativeEvent.originalTarget.value


			fetch("http://82.64.247.20:3636/all")
				.then(res => res.json())
				.then(data => {
					let countries =data.filter(country => country.name.slice(0, input.length).toLowerCase() === input.toLowerCase())
			
					this.setState(prevState => {
						return ({
							...prevState,
							countries :countries
						})
					})
				})
				.catch(e => {
					console.log(e)
				})			
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		
	}

	render() {

		return(
			<div className="container">
				<div className="row">
					<h2 className="text-center">Country Selector</h2>

					<div className="col-12">
						<Search onSubmit={this.handleSubmit} onChange={this.handleChange} />
					</div>

					<div className="col-12">
						<div className="row">
						{ 
							!this.state.search ? (
								!this.state.countries ? (
									<p>Loading...</p>
								) : (
									this.state.countries.length === 0 
										? (<p>This country cannot be found....</p>)
										:
									this.state.countries.map(country => (
											<Card
												name		={country.name}
												capital		={country.capital}
												region		={country.region}
												population	={country.population}
												flag		={country.flag}
											/>
									))
								)) : (

									<Card
										name		={this.state.name}
										capital		={this.state.capital}
										region		={this.state.region}
										population	={this.state.population}
										flag		={this.state.flag}
									/>
								)
						}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
