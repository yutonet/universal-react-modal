const openModal = (key, opts = {}) => {
	const openEvent = new CustomEvent('openUniversalModal', { detail: { modal: key, layer: 1, ...opts }});
	
	window.dispatchEvent(openEvent);
}

const closeModal = (layer = false) => {
	const closeEvent = new CustomEvent('closeUniversalModal', { detail: { layer: layer }});
	
	window.dispatchEvent(closeEvent);
}

export { openModal, closeModal }