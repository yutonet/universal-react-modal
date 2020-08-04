const openModal = (key, opts = {}) => {
	// let payload = { modal: key, ...opts };

	// if(opts.top === true) {
	// 	store.dispatch(topModalOpener(payload));	
	// }
	// else {
	// 	store.dispatch(modalOpener(payload));
	// }

	const openEvent = new CustomEvent('openUniversalModal', { detail: { modal: key, layer: 1, ...opts }});
	// openEvent.initEvent('openUniversalModal', true, 'test');
	
	window.dispatchEvent(openEvent);
}

const closeModal = (layer = false) => {
	// if(topModal === true) {
	// 	store.dispatch(topModalCloser());
	// }
	// else if(topModal === false) {
	// 	store.dispatch(modalCloser());
	// }
	// else {
	// 	store.dispatch(topModalCloser());
	// 	store.dispatch(modalCloser());
	// }
	const closeEvent = new CustomEvent('closeUniversalModal', { detail: { layer: layer }});
	
	window.dispatchEvent(closeEvent);
}

export { openModal, closeModal }