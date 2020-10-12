import { createStore, combineReducers } from 'redux'
import postReducer from '../reducers/postReducer'

const configureStore = () => {
	const store = createStore(
		combineReducers({
			posts: postReducer,
		})
	)
	return store
}

export default configureStore
