import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todo.slice";
import postsReducer from "../features/posts/post.slice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todoReducer,
		posts: postsReducer,
	},
});
