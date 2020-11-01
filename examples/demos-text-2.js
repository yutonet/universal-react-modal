import React from 'react'

const TextModal = (props) => {
    return (
        <div className={props.className}>
            {/* Default close button provided by the ModalWrapper */}
            {props.closeBtn}
            <div className="modal-content">
                {/* Render title if available */}
                {props.title && <h1 className="text-title" style={{marginBottom: '20px'}}>{props.title}</h1>}
                {/* Render content if available */}
                {props.content &&
                    <div className="text-content wysiwyg highlight-links">
                        {props.content}
                    </div>
                }
            </div>
        </div>
    )
}

TextModal.defaultProps = {
    name: "text",
    containerClass: "modal-text",
    // parent class for styling
    className: "",
    // title prop
    title: false,
    // content prop
    content: false,
}

export default TextModal