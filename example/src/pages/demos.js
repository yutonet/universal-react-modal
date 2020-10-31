import React from 'react'

// Deps
import { openModal } from 'universal-react-modal'
import Code from '../components/code'

const Demos = (props) => {
	return (
		<main className="page demos">
			<div className="wrapper wysiwyg">
				<h1>Demos</h1>
				<p>Demos page is not completely ready, but here's an example for grasping the fundamentals.</p>
				<h3>Passing dynamic variables.</h3>
				<p>
					<button
						className="link"
						onClick={() => {openModal('text', { title: 'Text Modal', content: 'This is a simple text modal.' })}}>
						Try me!
					</button>
				</p>

				<h5>Button code</h5>
				<Code src="demos-text-1.js" />
				<h5>Modal</h5>
				<Code src="demos-text-2.js" />

			</div>
		</main>
	)
}

export default Demos;