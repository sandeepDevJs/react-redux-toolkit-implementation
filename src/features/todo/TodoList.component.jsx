import React from "react";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";

import SingleTodo from "./SingleTodo.component";

const TodoList = () => {
	let todos = useSelector((state) => state.todos);
	return (
		<List>
			{todos.map((todo) => (
				<SingleTodo key={todo.time} todo={todo} />
			))}
		</List>
	);
};

export default TodoList;
