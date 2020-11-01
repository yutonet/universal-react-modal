# universal-react-modal

> React Modals, Made Simple and Customizable.

[![NPM](https://img.shields.io/npm/v/universal-react-modal.svg)](https://www.npmjs.com/package/universal-react-modal)
<!-- [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

Universal React Modal (URM) is a highliy customizable modal controller component for React.js.

URM provides developers better control on modal instances with multiple layers.

To find out more, see our [plugin page](https://yutonet.github.io/universal-react-modal/#/universal-react-modal/) on GitHub pages.

## Installation

```bash
yarn add universal-react-modal
```
or
```bash
npm install --save universal-react-modal
```

## Getting Started

Refer to the documentation for more.

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

## Documentation
[See the Documentation](https://yutonet.github.io/universal-react-modal/#/documentation/) on GitHub pages.

## License

MIT © [yutonet](https://github.com/yutonet)
