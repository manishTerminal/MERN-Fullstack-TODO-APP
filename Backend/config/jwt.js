const zod = require("zod");

const todoCreateSchema = zod.object({
	title: zod.string(),
	description: zod.string()
});

const updateSchema = zod.object({
	_id: zod.string()
});

module.exports = {
	todoCreateSchema,
	updateSchema
};
