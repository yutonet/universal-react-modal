const initialState = {
	modalData: false,
	topModalData: false,
};

const modalReducer = (state = initialState, action) => {
	if (action.type === "OPEN_MODAL") {
		return Object.assign({}, state, {
			modalData: action.payload
		});
	}
	else if (action.type === "CLOSE_MODAL") {
		return Object.assign({}, state, {
			modalData: false
		});
	}
	else if (action.type === "OPEN_TOP_MODAL") {
		return Object.assign({}, state, {
			topModalData: action.payload
		});
	}
	else if (action.type === "CLOSE_TOP_MODAL") {
		return Object.assign({}, state, {
			topModalData: false
		});
	}
	return state;
};

export default modalReducer;