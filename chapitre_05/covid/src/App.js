import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Chart = require('chart.js/dist/chart.js');

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
  ];


class App extends React.Component {
	
	constructor() {
		super()

		this.state ={
			chartConfig : {

			}
		}
	}

	componentDidMount = () => {

		fetch("http://82.64.247.20:3637/AllData")
			.then(res => res.json())
			.then(d => {

				let totalConfirmed = 0, totalDeaths = 0
				let dataConfirmed = [0], dataDeaths = [0]
				let dataDate =[]
				let currentMonth

				for (const [, t] of Object.entries(d)) {
					for (const [, data] of Object.entries(t)) {
						if (data.code === "DEP-92") {						
							totalConfirmed += data.casConfirmes
							dataConfirmed.push(data.casConfirmes)
							totalDeaths += data.deces
							dataDeaths.push(data.deces)
							dataDate.push(data.date)
						}
					}
				}

				let data ={
					labels: dataDate,
					datasets: [{
					  label: 'My First dataset',
					  backgroundColor: 'rgb(255, 99, 132)',
					  borderColor: 'rgb(255, 99, 132)',
					  data: dataDeaths,
					}]
				  }

				let myChart = new Chart(
					document.getElementById('myChart'),
					{
						type: 'line',
						data,
						options: {}
					}
				);
			})

		
	}

	render() {

		return(
			<div className="container">
				<div className="row">
					<div className="card bg-light mb-3">
						<div className="card-header">Header</div>
						<div className="card-body">
							<div>
								<canvas id="myChart"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
