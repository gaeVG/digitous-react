import { BrowserRouter, Switch, Link, Route } from "react-router-dom"
import Home from "./component/Home"
import Login from "./component/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<div className="container-fluid">
				<nav className="row">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>
				</nav>
			</div>
			<div className="container">

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
		
	);
}

export default App;
