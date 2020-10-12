import React from 'react'
import Home from './components/Home'
import PostForm from './components/postForm'
import PostList from './components/postList'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<Router>
			<div>
				<nav className='navbar'>
					<Link to='/'>Home</Link>
					<Link to='/postform'>New Post</Link>
					<Link to='/postlist'>Published</Link>
				</nav>
				<section className='container'>
					<Route path='/' component={Home} exact={true} />

					<Route path='/postform' component={PostForm} exact={true} />
					<Route path='/postlist' component={PostList} exact={true} />
				</section>
				<ToastContainer />
			</div>
		</Router>
	)
}

export default App
