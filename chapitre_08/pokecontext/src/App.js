import { BrowserRouter, Switch, Link, Route } from "react-router-dom"
import Home from "./component/Home"
import Login from "./component/Login"

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
		
	);
}

export default App;
