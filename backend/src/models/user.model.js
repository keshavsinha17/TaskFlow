import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  userId: { type: String, unique: true },
});
export default mongoose.model('User', userSchema);
