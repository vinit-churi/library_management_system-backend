import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["VIEW_ALL", "CREATOR"],
    default: "VIEW_ALL",
  },
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

export default User;
