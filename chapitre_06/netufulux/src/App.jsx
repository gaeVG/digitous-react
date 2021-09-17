import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // on importe les outils du router
import { Container } from "react-bootstrap"
import Header from "./component/Header/Header.jsx"
import Weekly from "./view/Weekly.jsx";
import WeeklyBattle from "./view/WeeklyBattle.jsx";
import Popular from "./view/Popular.jsx";
import PopularBattle from "./view/PopularBattle.jsx";
import Favorites from "./view/Favorites.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render() {
		return (
			<div>

				<BrowserRouter>
					<Header />

					<Container>
						<Switch>
							<Route exact path="/weekly" render={ props => ( <Weekly />)} />
							<Route exact path="/weekly-battle" render={ props => ( <WeeklyBattle />)} />
							<Route exact path="/popular" render={ props => ( <Popular />)} />``
							<Route exact path="/popular-battle" render={ props => ( <PopularBattle />)} />``
							<Route exact path="/favorites" render={ props => ( <Favorites />)} />``
						</Switch>
					</Container>
				</BrowserRouter>
			</div>
			
		);
	}
};

export default App;