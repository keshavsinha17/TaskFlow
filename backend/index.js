import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { clerkClient, requireAuth, getAuth } from '@clerk/express'
import User from './src/models/user.model.js';
import teamRoutes from './src/routes/team.routes.js';
import taskRoutes from './src/routes/Task.routes.js';
import connectDB from './src/db/index.js';

const app = express()
const PORT = process.env.PORT || 3000

// Configure CORS to allow requests from the frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}))

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use('/api/teams', requireAuth(), teamRoutes);
app.use('/api/tasks', requireAuth(), taskRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server and listen on the specified port
const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`TaskFlow API server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

startServer();
