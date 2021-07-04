import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, Grid } from "@material-ui/core";

import { decrement, increment, selectCount } from "./counterSlice";

export default function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Counter</h1>
			<Grid container justify="center" alignItems="center">
				<Grid xl={4} xs={4} item>
					<Button
						variant="contained"
						color="primary"
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>
						-
					</Button>
				</Grid>

				<Grid xl={4} xs={4} item>
					<Typography variant="h3">{count}</Typography>
				</Grid>

				<Grid xl={4} xs={4} item>
					<Button
						variant="contained"
						color="primary"
						aria-label="Increment value"
						onClick={() => dispatch(increment())}
					>
						+
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
