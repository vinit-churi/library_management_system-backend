import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from "./routes/books.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected...");
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  })
  .catch((err) => console.log(err));
