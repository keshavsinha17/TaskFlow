import Router from 'express';
import { requireAuth, getAuth } from "@clerk/express";
import Task from '../models/task.model.js';
import Team from '../models/Team.model.js';
const router = Router();

router.post('/create-task', requireAuth(), async (req, res) => {
    const { title, description, priority, dueDate, status, team } = req.body;
    const { userId } = getAuth(req);
  
    try {
      const task = new Task({
        title,
        description,
        priority,
        dueDate,
        status,
        team,
        // assignee: userId
      });
  
      await task.save();
      res.status(200).json(task);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/join-task', requireAuth(), async (req, res) => {
    const { taskId } = req.body;
    const { userId } = getAuth(req);
  
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      if (task.members.includes(userId)) {
        return res.status(400).json({ error: 'User already in task' });
      }
  
      task.members.push(userId);
      await task.save();
      res.status(200).json(task);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  export default router;    