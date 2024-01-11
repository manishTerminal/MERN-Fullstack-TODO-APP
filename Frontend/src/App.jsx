import { useState, useEffect } from "react";
import "./App.css";
import { TodoCreater } from "./Components/TodoCreater";
import { TodoViewer } from "./Components/TodoViewer";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setInterval(() => {
			fetch("http://localhost:4235/todos").then(async function (res) {
				const json = await res.json();
				setTodos(json.allTodo);
			});
		}, 500);
	}, [todos]);

	return (
		<>
			<TodoCreater></TodoCreater>
			<TodoViewer todos={todos}></TodoViewer>
		</>
	);
}

export default App;
