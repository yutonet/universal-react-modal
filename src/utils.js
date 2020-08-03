const openModal = (key, opts = {}) => {
	// let payload = { modal: key, ...opts };

	// if(opts.top === true) {
	// 	store.dispatch(topModalOpener(payload));	
	// }
	// else {
	// 	store.dispatch(modalOpener(payload));
	// }
	console.log('aç');

	const openEvent = new CustomEvent('openUniversalModal', { detail: { modal: key, ...opts }});
	// openEvent.initEvent('openUniversalModal', true, 'test');
	
	window.dispatchEvent(openEvent);
}

const closeModal = (topModal = null) => {
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
	const closeEvent = new CustomEvent('closeUniversalModal', { detail: { top: topModal }});
	
	window.dispatchEvent(closeEvent);
}

export { openModal, closeModal }