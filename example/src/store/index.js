import { combineReducers, createStore } from 'redux'
// import modalsReducer from 'store/modals';

const rootReducer = combineReducers({
	// 'modals': modalsReducer,
})

const store = createStore(rootReducer);

export default store;