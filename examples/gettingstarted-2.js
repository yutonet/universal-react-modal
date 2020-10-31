import React from 'react'

// Importing plugin dependencies
import { ModalController, openModal } from 'universal-react-modal'

// Importing modal component
import ExampleModal from './modals/example'

// Importing CSS file
import 'universal-react-modal/dist/index.css'

// To Import SCSS module
// import 'universal-react-modal/scss/styles.scss'


const MyApp = () => {
    return (
        <div className="app-container">
            // Including ModalController and the modal component(s).
            <ModalController>
                <ExampleModal />
            </ModalController>

            <div>
                // Name of the modal is exported on the modal file. URM detects and opens the modal automatically.
                <button onClick={() => { openModal('text'); }}>Click Me!</button>
            </div>
        </div>
    )
}

export default MyApp