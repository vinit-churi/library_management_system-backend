import mongoose from "mongoose";
const logSchema = new mongoose.Schema({
  content: String,
  date: Date,
});

const Log = mongoose.model("Log", logSchema);
export default Log;
