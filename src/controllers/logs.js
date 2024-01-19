import Log from "../models/log.js";
export default async function logHandler(req, res) {
  const logs = await Log.find({});
  res.json(logs);
}
