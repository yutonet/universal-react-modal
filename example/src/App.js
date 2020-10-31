import React from 'react'

// Deps
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import { ModalController } from 'universal-react-modal'

// Pages
import AboutPage from './pages/about'
import GettingStartedPage from './pages/getting-started'
import DocumentationPage from './pages/documentation'
import DemosPage from './pages/demos'

// Demo Modals
import TextModal from './modals/text'
import ExampleModal from './modals/example'

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
		<Router basename={process.env.PUBLIC_URL}>
			<ModalController>
				<ExampleModal />
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
						<NavLink to="/getting-started">Getting Started</NavLink>
						{/* Soon... <NavLink to="/documentation">Documentation</NavLink> */}
						<NavLink to="/demos">Demos</NavLink>
						<a href="https://github.com/yutonet/universal-react-modal/" target="_blank" rel="noopener noreferrer">View on GitHub</a>
						<a href="https://www.npmjs.com/package/universal-react-modal" target="_blank" rel="noopener noreferrer">View on NPM</a>
					</div>
				</nav>

				<Switch>
					<Route path="/getting-started" exact>
						<GettingStartedPage />
					</Route>
					<Route path="/documentation" exact>
						<DocumentationPage />
					</Route>
					<Route path="/demos" exact>
						<DemosPage />
					</Route>
					<Route>
						<AboutPage />
					</Route>
				</Switch>

				<footer className="app-footer">
					MIT © Yunus Tabakoğlu, 2020
				</footer>
			</div>
		</Router>
	);
}

export default DemoApp;
