import React from 'react'

// Deps
import Code from '../components/code'

const GettingStarted = (props) => {
	return (
		<main className="page getting-started">
			<div className="wrapper wysiwyg">
				<h1>Getting Started.</h1>

                <h2>Installation</h2>
                
                <p>You can install Universal React Modal (URM) through NPM.</p>
                <Code src="gettingstarted-1.js" />

				<p>To implement Universal React Modal (URM), you must include the ModalController and the modal components on your app first.</p>

                <h4>./App.js</h4>
                <Code src='gettingstarted-2.js' />

                <p>The modal component is a simple React.js component with some distinct props.</p>
                <h4>./modals/example.js</h4>
                <Code src='gettingstarted-3.js' />
			</div>
		</main>
	)
}

export default GettingStarted;