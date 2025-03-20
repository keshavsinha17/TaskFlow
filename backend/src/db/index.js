import mongoose from "mongoose";

export default function connectDB() {
  mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'TaskFlow', // Explicitly specify the database name
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
}