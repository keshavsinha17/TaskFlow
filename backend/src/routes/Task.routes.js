import Router from 'express';
import { requireAuth, getAuth } from "@clerk/express";
import Task from '../models/task.model.js';
import Team from '../models/Team.model.js';

const router = Router();

// Get all tasks for a specific team
router.get('/team/:teamId', requireAuth(), async (req, res) => {
  try {
    const { teamId } = req.params;
    const { userId } = getAuth(req);
    
    // Verify user is a member of the team
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    
    if (!team.members.includes(userId)) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }
    
    const tasks = await Task.find({ teamId });
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create a new task
router.post('/create-task', requireAuth(), async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, teamId, assignedTo } = req.body;
    const { userId } = getAuth(req);
    
    // Verify user is a member of the team
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    
    if (!team.members.includes(userId)) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }
    
    const task = await Task.create({
      title,
      description,
      status: status || 'todo',
      priority: priority || 'medium',
      dueDate,
      teamId,
      createdBy: userId,
      assignedTo: assignedTo || userId
    });
    
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: error.message });
  }
});

// Update a task
router.put('/:id', requireAuth(), async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = getAuth(req);
    const updates = req.body;
    
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    // Verify user is a member of the team
    const team = await Team.findById(task.teamId);
    if (!team.members.includes(userId)) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }
    
    // Update the task
    Object.keys(updates).forEach(key => {
      task[key] = updates[key];
    });
    
    await task.save();
    res.json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: error.message });
  }
});

// Delete a task
router.delete('/:id', requireAuth(), async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = getAuth(req);
    
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    // Verify user is a member of the team
    const team = await Team.findById(task.teamId);
    if (!team.members.includes(userId)) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }
    
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;