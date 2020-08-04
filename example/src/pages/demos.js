import React from 'react'

// Deps
import { openModal } from 'universal-react-modal'

const Demos = (props) => {
	return (
		<main className="page demos">
			<div className="wrapper wysiwyg">
				<h1>Demos</h1>
				<p>This section is not quite ready.</p>
				<p>
					<button onClick={() => {openModal('text', { title: 'Text Modal', content: 'This is a simple text modal.' })}}>Text Modal</button>
				</p>
			</div>
		</main>
	)
}

export default Demos;