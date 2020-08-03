import { combineReducers, createStore } from 'redux'
// import modalsReducer from 'store/modals';
import { modalReducer } from 'universal-react-modal'

const rootReducer = combineReducers({
	// 'modals': modalsReducer,
	modalReducer
})

const store = createStore(rootReducer);

export default store;