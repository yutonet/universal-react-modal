// Actions
export const openModal = payload => ({
	type: "OPEN_MODAL", payload
});

export const closeModal = payload => ({
	type: "CLOSE_MODAL"
});

export const openTopModal = payload => ({
	type: "OPEN_TOP_MODAL", payload
});

export const closeTopModal = payload => ({
	type: "CLOSE_TOP_MODAL"
});