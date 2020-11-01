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
    preventClose: false,
}

export default ExampleModal