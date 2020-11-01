import React from 'react'

// Deps
import { openModal } from 'universal-react-modal'

const MultiLayerModal = (props) => {
    return (
        <div className={props.className}>
            {props.closeBtn}
            <div className="modal-content">
                <h1 style={{ marginBottom: '2rem' }}>Multi-Layer Modals</h1>
                <div className="wysiwyg">
                    <p>URM multi-layer modals allow users to controls modals within modals when needed.</p>
                    <p>
                        <button
                            className="link"
                            onClick={() => {
                                openModal(
                                    'text',
                                    {
                                        // Opening the modal in the second layer.
                                        layer: 2,
                                        title: 'Top layer modal',
                                        content: 'This layer has been opened on another layer. Therefore it doesn\'t affect the previous modal.' 
                                    }
                                )
                            }}>
                            Click here
                        </button> 
                        to open another modal on top of this one.</p>
                </div>
            </div>
        </div>
    )
}

MultiLayerModal.defaultProps = {
    name: "multi-layer",
    containerClass: "modal-multi-layer",
}

export default MultiLayerModal