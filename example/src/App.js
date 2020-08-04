import React from 'react'

// Deps
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
import 'universal-react-modal/src/scss/urm-styles.scss'

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
