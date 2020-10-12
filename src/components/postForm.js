import React from 'react'
import { AddPost } from '../actions/postAction'
import { connect } from 'react-redux'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SetAlert from './AlertBox'

class PostForm extends React.Component {
	constructor() {
		super()
		this.state = {
			title: '',
			body: '',
			err: false,
			errbody: false,
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	handleEditorChange = (event, editor) => {
		const body = editor.getData()
		this.setState({
			body,
		})
		//console.log({ event, editor, body })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { title, body } = this.state

		title.length === 0
			? this.setState({ err: true })
			: this.setState({ err: false })
		body.length === 0
			? this.setState({ errbody: true })
			: this.setState({ errbody: false })

		const formData = {
			title,
			body,
		}

		//console.log(formData)
		// this.setState({
		// 	title: '',
		// 	body: '',
		// })
		if (title.length > 0 && body.length > 0) {
			toast.success('Post Added Successfully!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
			this.props.dispatch(AddPost(formData))
			this.props.history.push('/postlist')
		}
	}

	render() {
		const { title, body, err, errbody } = this.state

		return (
			<div id='editor'>
				<h1>Add New Post</h1>
				<br />
				<form onSubmit={this.handleSubmit} className='form'>
					<div className='form-group'>
						<label htmlFor='title' className='label'>
							Title{' '}
						</label>
						<br />

						<input
							type='text'
							name='title'
							value={title}
							onChange={this.handleChange}
							maxLength='20'
							style={{
								border: err && '1px solid red',
							}}
						/>
						{err ? <SetAlert /> : ''}
					</div>
					<br />
					<div style={{ width: '80%' }}>
						<label htmlFor='body' className='label'>
							Body{' '}
						</label>

						<CKEditor
							editor={ClassicEditor}
							data={body}
							onChange={this.handleEditorChange}
						/>
						{errbody ? <SetAlert /> : ''}
					</div>
					<br />

					<input type='submit' value='PUBLISH' className='btn' />
				</form>
			</div>
		)
	}
}

export default connect(null)(PostForm)
