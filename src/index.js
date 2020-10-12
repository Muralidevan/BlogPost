import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './configStore/Store'

const Store = configureStore()

console.log(Store.getState())

Store.subscribe(() => {
	console.log(Store.getState())
})

const jsx = (
	<Provider store={Store}>
		<App />
	</Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))
