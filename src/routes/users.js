import express from "express";
import * as userController from "../controllers/users.js";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/:id", userController.getUserById);

export default router;
