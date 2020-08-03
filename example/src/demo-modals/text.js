import React from 'react'

const TextModal = (props) => {
	return (
		<div className={props.className}>
			{props.closeBtn}
			<div className="modal-content">
				{props.title && <h1 className="text-title">{props.title}</h1>}
				{content &&
					<div className="text-content wysiwyg highlight-links">
						{props.content ? props.content : false}
					</div>
				}
			</div>
		</div>
	)
}

TextModal.defaultProps = {
	className: "",
	containerClass: "modal-text",
	name: "text",
	title: false,
	content: false,
}

export default TextModal