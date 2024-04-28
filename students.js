const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo.js");
const { getTodos,getTodoById } = require("../controllers/getTodo.js");
const { updateTodo} = require("../controllers/updateTodo.js");
const { deleteTodo} = require("../controllers/deleteTodo.js");

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;