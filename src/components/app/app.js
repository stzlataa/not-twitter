import React, { Component } from "react";
import AppHeader from "../app-header";
import Search from "../search";
import PostStatus from "../post-status-filter";
import Posts from "../post-list";
import AddPost from "../post-add-form";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appData: [
				{ label: "Good day in my mind!", like: false, important: false, id: 1 },
				{ label: "React is cool", like: false, important: false, id: 2 },
				{ label: "Do Androids Dream of Electric Sheep?", like: false, important: false, id: 3 },
			],
			term: "",
			filter: "all",
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ appData }) => {
			const index = appData.findIndex((elem) => elem.id === id);

			const before = appData.slice(0, index);
			const after = appData.slice(index + 1);

			const newArr = [...before, ...after];

			return {
				appData: newArr,
			};
		});
	};

	filterPost = (items, filter) => {
		if (filter === "like") {
			return items.filter((item) => item.like);
		} else {
			return items;
		}
	};

	onToggleImportant = (id) => {
		this.setState(({ appData }) => {
			const index = appData.findIndex((elem) => elem.id === id);
			const old = appData[index];
			const newItem = { ...old, important: !old.important };
			const newArr = [...appData.slice(0, index), newItem, ...appData.slice(index + 1)];

			return {
				appData: newArr,
			};
		});
	};
	onToggleLiked = (id) => {
		this.setState(({ appData }) => {
			const index = appData.findIndex((elem) => elem.id === id);
			const old = appData[index];
			const newItem = { ...old, like: !old.like };
			const newArr = [...appData.slice(0, index), newItem, ...appData.slice(index + 1)];

			return {
				appData: newArr,
			};
		});
	};

	addItem = (body) => {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		};

		this.setState(({ appData }) => {
			const newArr = [...appData, newItem];
			return { appData: newArr };
		});
	};

	searchPost = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term: term });
	};

	onFilterSelect = (filter) => {
		this.setState({ filter: filter });
	};

	render() {
		const { appData, term, filter } = this.state;
		const liked = appData.filter((item) => item.like).length;
		const allPosts = this.state.appData.length;
		const visiblePosts = this.filterPost(this.searchPost(appData, term), filter);

		return (
			<div className='app'>
				<AppHeader liked={liked} allPosts={allPosts} />
				<div className='search-panel d-flex'>
					<Search onUpdateSearch={this.onUpdateSearch} />
					<PostStatus onFilterSelect={this.onFilterSelect} filter={filter} />
				</div>
				<Posts posts={visiblePosts} onDelete={this.deleteItem} onToggleLiked={this.onToggleLiked} onToggleImportant={this.onToggleImportant} />
				<AddPost onAdd={this.addItem} />
			</div>
		);
	}
}
