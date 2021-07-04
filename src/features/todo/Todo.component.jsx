import React from "react";
import { Container } from "@material-ui/core";

import InputBox from "./InputBox.component";
import TodoList from "./TodoList.component";

const Todo = () => {
	return (
		<Container>
			<h1>TODOS</h1>
			<InputBox />
			<TodoList />
		</Container>
	);
};

export default Todo;
