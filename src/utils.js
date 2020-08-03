import store from './store'
import {
	openModal as modalOpener,
	closeModal as modalCloser,
	openTopModal as topModalOpener,
	closeTopModal as topModalCloser,
} from './store/actions'

export function openModal(key, opts = {}) {
	let payload = { modal: key, ...opts };

	if(opts.top === true) {
		store.dispatch(topModalOpener(payload));	
	}
	else {
		store.dispatch(modalOpener(payload));
	}
}

export function closeModal(topModal = null) {
	if(topModal === true) {
		store.dispatch(topModalCloser());
	}
	else if(topModal === false) {
		store.dispatch(modalCloser());
	}
	else {
		store.dispatch(topModalCloser());
		store.dispatch(modalCloser());
	}
}