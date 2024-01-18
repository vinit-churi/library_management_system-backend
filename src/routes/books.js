import express from "express";
import * as bookController from "../controllers/books.js";
import authMiddleware from "../middleware/auth.js";
import roleCheckMiddleware from "../middleware/roleCheck.js";

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post(
  "/create",
  authMiddleware,
  roleCheckMiddleware(["CREATOR"]),
  bookController.createBook
);
router.put(
  "/:id",
  authMiddleware,
  roleCheckMiddleware(["CREATOR"]),
  bookController.updateBookById
);
router.delete(
  "/:id",
  authMiddleware,
  roleCheckMiddleware(["CREATOR"]),
  bookController.deleteBookById
);

export default router;
