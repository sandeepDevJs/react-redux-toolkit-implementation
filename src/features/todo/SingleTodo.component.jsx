import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemText, Fab } from "@material-ui/core";

import { deleteTodo } from "./todo.slice";

const SingleTodo = ({ todo }) => {
	const dispatch = useDispatch();

	let { todo: todoTask, time } = todo;
	let dateObj = new Date(time);

	let newDate = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

	const onClickHandler = () => {
		dispatch(deleteTodo(time));
	};

	return (
		<ListItem>
			<ListItemText primary={todoTask} secondary={newDate} />
			<Fab
				color="primary"
				aria-label="delete"
				onClick={onClickHandler}
				style={{ right: "3.4vw" }}
			>
				DEL
			</Fab>
		</ListItem>
	);
};

export default SingleTodo;
