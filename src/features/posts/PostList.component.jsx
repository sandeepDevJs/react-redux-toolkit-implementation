import React from "react";

import Post from "./Post.component";

const PostList = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};

export default PostList;
