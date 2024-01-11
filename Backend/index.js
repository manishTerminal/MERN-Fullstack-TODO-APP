require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const todoRouter = require("./routes/route-todo-post");

app.use(cors());
app.use(express.json());
app.use(todoRouter);

app.listen(PORT, () => {
	console.log(`The todo server is listening at ${PORT}`);
});
