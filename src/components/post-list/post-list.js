import React from "react";
import PostItem from "../post-list-item";

const Posts = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className='list-group-item'>
				<PostItem {...itemProps} onToggleImportant={() => onToggleImportant(id)} onToggleLiked={() => onToggleLiked(id)} onDelete={() => onDelete(id)} />
			</li>
		);
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default Posts;