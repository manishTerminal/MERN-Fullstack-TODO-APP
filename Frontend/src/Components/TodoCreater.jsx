import axios from "axios";

export function TodoCreater(props) {
	return (
		<>
			<input id="title" type="text" placeholder="Enter title"></input>
			<br></br>
			<input
				id="description"
				type="text"
				placeholder="Enter description"
			></input>
			<br></br>
			<button
				onClick={() => {
					axios
						.post("http://localhost:4235/todo", {
							title: document.querySelector("#title").value,
							description: document.querySelector("#description").value
						})
						.then(async (res) => {
							const data = await res.json();
							alert("The todo created");
						});
				}}
			>
				Add Todo
			</button>
		</>
	);
}
