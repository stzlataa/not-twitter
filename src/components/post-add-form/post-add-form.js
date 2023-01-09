import React, { Component } from "react";

export default class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	onValueChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: "",
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className='bottom-panel d-flex'>
				<input value={this.state.text} onChange={this.onValueChange} type='text' placeholder='How do you feel now?' className='form-control new-post-label' />
				<button type='submit' className='btn btn-outline-secondary'>
					Post
				</button>
			</form>
		);
	}
}
