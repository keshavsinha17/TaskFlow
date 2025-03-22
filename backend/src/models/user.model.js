import mongoose from "mongoose";
import Team from "../models/Team.model.js";
const userSchema = new mongoose.Schema({
  name: String ,
  userId: { type: String, unique: true, required: true },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});
export default mongoose.model('User', userSchema);
