const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const todoSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: false
});

const todo = mongoose.model("Todo", todoSchema);


module.exports = todo

