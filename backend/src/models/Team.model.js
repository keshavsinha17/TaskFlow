import mongoose from "mongoose";
const teamSchema = new mongoose.Schema({
  name: String,
  code: { type: String, unique: true },
  // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  members: [{ type: String }],
});
export default mongoose.model('Team', teamSchema);