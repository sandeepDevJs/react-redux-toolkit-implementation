import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";

import PostList from "./PostList.component.jsx";
import { selectPosts, getPosts } from "./post.slice";

const PostsContainer = () => {
	let { loading, posts, error } = useSelector(selectPosts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div>
			<h1>Blogs</h1>
			{loading && <p>Loading...</p>}
			{error && <Typography variant="subtitle">{error}</Typography>}
			<PostList posts={posts} />
		</div>
	);
};

export default PostsContainer;
