const {Router} = require("express");
const {postTodos, getTodos, getTodo, updateTodos, deleteTodos} = require("../controllers/todoController");
const router = Router();

router.get("/:id", getTodo);

router.put("/:id", updateTodos);

router.delete("/:id", deleteTodos);

router.get("/", getTodos);

router.post("/", postTodos);



module.exports = router;