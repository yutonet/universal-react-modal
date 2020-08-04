import React from 'react'

// Deps
import { openModal } from 'universal-react-modal'


const About = (props) => {
	return (
		<main className="page about">
			<div className="wrapper wysiwyg">
				<h1>React Modals, Made Simple and Customizable.</h1>
				<p>Universal React Modal is a highliy customizable centralized modal controller component for React.js.</p>
				<h2>Test Me!</h2>
				<p>
					<button onClick={() => {openModal('text', { title: 'Hello World!', content: 'This is a very simple (but effective) text modal.' })}}>Text Modal</button>
				</p>
				<p>For more info, see <strong>demos</strong> page.</p>
				
			</div>
		</main>
	)
}

export default About;