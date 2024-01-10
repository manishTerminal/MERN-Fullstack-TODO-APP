const express = require("express");
const router = express.Router();
const { todoCreateSchema, updateSchema } = require("../config/jwt");
const todo = require("../db/db");

router.post("/todos", async (req, res) => {
	const todoPayload = req.body;
	const payloadParsing = todoCreateSchema.safeParse(todoPayload);

	if (!payloadParsing.success) {
		res.json({
			msg: "The data is invalid"
		});
		return;
	}

	await todo.create({
		title: todoPayload.title,
		description: todoPayload.description,
		completed: false
	});

	return res.json({
		msg: "The data is inserted into the database."
	});
});

router.get("/todos", async (req, res) => {
	const allTodo = await todo.find({});
	return res.json({
		allTodo
	});
});

router.put("/todos", async (req, res) => {
	const updatePayload = req.body;
	const parsePayload = updateSchema.safeParse(updatePayload);

	if (!parsePayload.success) {
		res.json({
			msg: "The is some error in update payload."
		});
		return;
	}

	await todo.updateOne(
		{
			_id: updatePayload._id
		},
		{ completed: true }
	);

	return res.json({
		msg: "The completed is updated"
	});
});

module.exports = router;
