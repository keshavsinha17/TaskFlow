import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { clerkClient, requireAuth, getAuth } from '@clerk/express'
import User from './src/models/user.model.js';
// const { ClerkExpressRequireAuth, getAuth } = require('@clerk/clerk-sdk-node');
const app = express()
const PORT = 3000

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
))
app.use(express.json()); // Add this line to parse JSON request bodies

// Use requireAuth() to protect this route
// If user isn't authenticated, requireAuth() will redirect back to the homepage
// app.get('/protected', requireAuth(), async (req, res) => {
//   // Use `getAuth()` to get the user's `userId`
//   const { userId } = getAuth(req)

//   // Use Clerk's JavaScript Backend SDK to get the user's User object
//   const user = await clerkClient.users.getUser(userId)
// console.log(user.firstName);
// if (!(await User.findOne({ userId: user.id }))) {
//   await User.create({ name: user.firstName, userId: user.id });
// }
//   return res.json({ user })
// })
import teamRoutes from './src/routes/team.routes.js';
import taskRoutes from './src/routes/Task.routes.js';
import connectDB from './src/db/index.js';

app.use('/api', requireAuth(), teamRoutes);

app.use('/api', requireAuth(), taskRoutes);
// Start the server and listen on the specified port
const startServer = async () => {
    try {
      await connectDB();
      console.log("MongoDB connected");
      app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
      process.exit(1); // Exit the process if MongoDB connection fails
    }
  };
  
  startServer();
