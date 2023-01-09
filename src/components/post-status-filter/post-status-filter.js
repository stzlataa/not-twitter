import React, { Component } from "react";

export default class PostStatus extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ name: "all", label: "All" },
			{ name: "like", label: "Liked" },
		];
	}
	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const active = this.props.filter === name;
			const clazz = active ? "btn-info" : "btn-outline-secondary";
			return (
				<button onClick={() => this.props.onFilterSelect(name)} key={name} type='button' className={`btn ${clazz}`}>
					{label}
				</button>
			);
		});
		return <div className='btn-group'>{buttons}</div>;
	}
}
