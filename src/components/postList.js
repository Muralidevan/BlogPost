import React, { useState } from 'react'
import { connect } from 'react-redux'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

function PostList({ posts }) {
	const [searchitem, setsearchitem] = useState('')
	const handleChange = (e) => {
		setsearchitem(e.target.value)
	}

	return (
		<div>
			{posts.length === 0 ? (
				<div>
					<h1>No Posts Found</h1>
					<Link to={`/postform`} className='btn'>
						Add Post
					</Link>
				</div>
			) : (
				<form className='form'>
					<div className='inputContainer'>
						<i className='fa fa-search icon'> </i>

						<input
							type='search'
							placeholder='search by title or body'
							value={searchitem}
							onChange={handleChange}
							className='Field'
						/>
					</div>
				</form>
			)}

			{posts
				.filter(
					(ele) =>
						ele.title.includes(searchitem) || ele.body.includes(searchitem)
				)
				.map((ele, i) => {
					return (
						<div key={i} className='posts'>
							<h1>{ele.title}</h1>
							<div> {parse(ele.body)}</div>
						</div>
					)
				})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps)(PostList)
