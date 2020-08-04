import React from 'react'

// Deps
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import { ModalController } from 'universal-react-modal'

// Pages
import About from './pages/about'
import Documentation from './pages/documentation'
import Demos from './pages/demos'

// Demo Modals
import TextModal from './demo-modals/text'

// Assets
import logo from './assets/logo.svg'
import './assets/styles/app.scss'

// To Import SCSS Module
import 'universal-react-modal/scss/styles.scss'

// To Import CSS Module
// import 'universal-react-modal/dist/index.css'

const DemoApp = () => {
	// console.log(name);
	return (
		<Router>
				<ModalController>
					<TextModal />
				</ModalController>

				<div className="app-wrap">
					<header className="app-header">
						<div className="wrapper">
							<Link to="/">
								<img src={logo} className="header-logo" alt="logo" />
							</Link>
						</div>
					</header>

					<nav className="app-nav">
						<div className="wrapper nav-wrap">
							<NavLink to="/" exact>About</NavLink>
							<NavLink to="/documentation">Documentation</NavLink>
							<NavLink to="/demos">Demos</NavLink>
						</div>
					</nav>

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
