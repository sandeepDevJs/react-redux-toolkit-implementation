import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
	let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return data;
});

const postSlice = createSlice({
	name: "posts",
	initialState: {
		loading: false,
		posts: [],
		error: null,
	},

	extraReducers: {
		[getPosts.pending]: (state, action) => {
			state.loading = true;
		},
		[getPosts.fulfilled]: (state, action) => {
			state.loading = false;
			state.posts = [...action.payload.slice(0, 4)];
		},
		[getPosts.rejected]: (state, action) => {
			console.log({ action });
			state.loading = false;
			state.posts = [];
			state.error = action.error
				? action.error.message
				: "Something Went Wrong";
		},
	},
});

export const selectPosts = (state) => state.posts;

export default postSlice.reducer;
