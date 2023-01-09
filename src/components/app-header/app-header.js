import React from "react";

const AppHeader = ({liked, allPosts}) => {
	return (
		<div className='app-header d-flex'>
			<h1>Zlata Steparyuk</h1>
			<h2>{allPosts} posts, liked: {liked}</h2>
		</div>
	);
};

export default AppHeader;
