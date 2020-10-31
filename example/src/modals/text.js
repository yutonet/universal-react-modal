import React from 'react'

const TextModal = (props) => {
	return (
		<div className={props.className}>
			{props.closeBtn}
			<div className="modal-content">
				{props.title && <h1 className="text-title" style={{marginBottom: '2rem'}}>{props.title}</h1>}
				{props.content &&
					<div className="text-content wysiwyg highlight-links">
						{props.content ? props.content : false}
					</div>
				}
			</div>
		</div>
	)
}

TextModal.defaultProps = {
	name: "text",
	containerClass: "modal-text",
	className: "",
	title: false,
	content: false,
}

export default TextModal