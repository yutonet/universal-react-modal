# universal-react-modal

> Universal modals, unite...

<!-- [![NPM](https://img.shields.io/npm/v/universal-react-modal.svg)](https://www.npmjs.com/package/universal-react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

## Installation

```bash
yarn add universal-react-modal
```
or
```bash
npm install --save universal-react-modal
```

## Usage

Please refer to the 'example' project until I publish a major release with a proper documentation.

```jsx
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
```

```jsx
import React from 'react'

const ExampleModal = (props) => {
    return (
        <div className={props.className}>
            {props.closeBtn}
            <div className="modal-content">
                <h1 style={{marginBottom: '20px'}}>Hello World</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <p>Mauris eu condimentum augue. Cras sit amet sodales ligula.</p>

                    <p>Ut sollicitudin vestibulum ex vitae fermentum.</p>
                </div>
            </div>
        </div>
    )
}

ExampleModal.defaultProps = {
    name: "example",
    containerClass: "modal-example",
}

export default ExampleModal
```

## License

MIT © [yutonet](https://github.com/yutonet)
