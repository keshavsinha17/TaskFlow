import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 10
  },
  members: [{
    type: String, // Clerk userId (string)
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensure unique code index
// teamSchema.index({ code: 1 }, { unique: true });

export default mongoose.model('Team', teamSchema);