const express = require("express");
const router = express.Router();
const { todoCreateSchema } = require("../config/jwt");
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
		description: todoPayload.description
	});

	return res.json({
		msg: "The data is inserted into the database."
	});
});

router.get("/todos", (req, res) => {});

router.put("/todos", (req, res) => {});

module.exports = router;
