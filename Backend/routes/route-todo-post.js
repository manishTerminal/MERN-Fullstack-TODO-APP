const express = require("express");
const router = express.Router();

router.post("/todos", (req, res) => {
    todoPayload = req.body
});

router.get("/todos", (req, res) => {});

router.put("/todos", (req, res) => {});

module.exports = router;
