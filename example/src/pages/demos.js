import React from 'react'

// Deps
import { openModal } from 'universal-react-modal'
import Code from '../components/code'

const Demos = (props) => {
	return (
		<main className="page demos">
			<div className="wrapper wysiwyg">
				<h1>Demos</h1>
				<hr />
				<h2>Passing dynamic variables.</h2>
				<p>
					<button
						className="link"
						onClick={() => {openModal('text', { title: 'Text Modal', content: 'This is a simple text modal.' })}}>
						(Demo)
					</button>
				</p>

				<h5>Triggering</h5>
				<Code src="demos-text-1.js" />
				<h5>Modal</h5>
				<Code src="demos-text-2.js" />

				<hr />
				<h2>Multiple layers</h2>

				<p>
					<button
						className="link"
						onClick={() => { openModal('multi-layer')}}>
						(Demo)
					</button>
				</p>

				<h5>Modal</h5>
				<Code src="demos-multiple-1.js" />
			</div>
		</main>
	)
}

export default Demos;