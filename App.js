import React, { Component } from 'react'
import './App.css'
import PostList from './Component/PostList'
import Form from './Form'
import PostForm from './Component/PostForm'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Form />
			</div>
		)
	}
}

export default App