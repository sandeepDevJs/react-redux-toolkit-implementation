import React from "react";
import { Container, Grid } from "@material-ui/core";

import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo.component";
import PostsContainer from "./features/posts/PostsContainer.component";

function App() {
	return (
		<Container>
			<Grid container>
				<Grid xl={4} xs={4} item>
					<Counter />
				</Grid>
				<Grid xl={4} xs={4} item>
					<Todo />
				</Grid>
				<Grid xl={4} xs={4} item>
					<PostsContainer />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
