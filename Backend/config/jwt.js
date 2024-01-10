const zod = require("zod");

const todoCreateSchema = zod.object({
	title: zod.string(),
	description: zod.string()
});

const updateSchema = zod.object({
	completed: zod.boolean()
});

module.exports = {
	todoCreateSchema,
	updateSchema
};
