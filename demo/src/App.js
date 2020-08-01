import React from 'react'

// Deps
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { TestComponent, TestTwo } from 'universal-react-modal'

// Pages
import About from './pages/about'
import Documentation from './pages/documentation'
import Demos from './pages/demos'

// Assets
import logo from './assets/logo.svg'
import './assets/style.scss'

const DemoApp = () => {
	// console.log(name);
	return (
		<Router>
			<div className="app-wrap">
				<header className="app-header">
					<div className="wrapper">
						<img src={logo} className="header-logo" alt="logo" />
					</div>
				</header>

				<nav className="app-nav">
					<div className="wrapper nav-wrap">
						<Link to="/">About</Link>
						<Link to="/documentation">Documentation</Link>
						<Link to="/demos">Demos</Link>
					</div>
				</nav>

				<TestTwo />

				<Switch>
					<Route path="/" exact>
						<About />
					</Route>
					<Route path="/documentation" exact>
						<Documentation />
					</Route>
					<Route path="/demos" exact>
						<Demos />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default DemoApp;
