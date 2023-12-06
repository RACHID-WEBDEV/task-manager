const express = require("express");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);

// router
//   .route("/")
//   .get(taskController.getAllTasks)
//   .post(taskController.createTask);
// router
//   .route("/:id")
//   .get(taskController.getTask)
//   .patch(taskController.updateTask)
//   .delete(taskController.deleteTask);

module.exports = router;
