import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid } from "@material-ui/core";

import { add } from "./todo.slice";

const InputBox = () => {
	const dispatch = useDispatch();
	const ref = useRef();

	const onClickHandler = () => {
		dispatch(add({ todo: ref.current.value, time: Date.now() }));
		ref.current.value = "";
	};

	return (
		<div>
			<Grid container justify="center" alignItems="center">
				<Grid xl={10} xs={10} item>
					<TextField
						variant="outlined"
						placeholder="Enter Todo Here..."
						name="todo"
						inputRef={ref}
						fullWidth
					/>
				</Grid>
				<Grid xl={2} xs={2} item>
					<Button
						color="primary"
						onClick={onClickHandler}
						variant="contained"
						style={{ height: "8vh" }}
					>
						Add
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default InputBox;
