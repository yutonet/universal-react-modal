import React from 'react'

// Deps
import { openModal } from 'universal-react-modal'
import { NavLink } from 'react-router-dom'


const About = (props) => {
	return (
		<main className="page about">
			<div className="wrapper wysiwyg">
				<h1>React Modals, Made Simple and Customizable.</h1>
				<p>Universal React Modal (URM) is a highliy customizable modal controller component for React.js.</p>
				<p>URM provides developers better control on modal instances with multiple layers.</p>
				<p>To find out how to implement  URM, see the <NavLink to="getting-started">getting started</NavLink> page.</p>

				<h2>Demos</h2>
				<p>
					<button
						className="link"
						onClick={() => {openModal('example')}}>
						Show me an example
					</button>
				</p>
				<p>For more info, see <NavLink to="demos">demos</NavLink> page.</p>
				
			</div>
		</main>
	)
}

export default About;