import React, { Component } from "react";

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
		};
	}
	onUpdateSearch = (e) => {
		const term = e.target.value.toLowerCase();
		this.setState({ term: term });
		this.props.onUpdateSearch(term);
	};
	render() {
		return <input onChange={this.onUpdateSearch} className='form-control search-input' type='text' placeholder='Search by posts' />;
	}
}
