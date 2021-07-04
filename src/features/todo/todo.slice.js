import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todos",
	initialState: [],

	reducers: {
		add: (state, action) => {
			state.push(action.payload);
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.time !== action.payload);
		},
	},
});

export const { add, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
