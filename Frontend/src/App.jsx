import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todo } from "./Components/Todo";
import { TodoViewer } from "./Components/TodoViewer";

function App() {
	return <>
    <Todo></Todo>
    <TodoViewer></TodoViewer>
  </>;
}

export default App;
