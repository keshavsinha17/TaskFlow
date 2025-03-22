import { Router } from 'express';
import Task from '../models/task.model.js';
import { requireAuth, getAuth } from '@clerk/express';
const router = Router();

router.post('/create-task', requireAuth(), async (req, res) => {
  console.log('Request body:', req.body);
  const { title, description, priority, dueDate, status, team: teamId } = req.body;
  const { userId } = getAuth(req);
  console.log('Team ID:', teamId);

  if (!teamId) {
    return res.status(400).json({ message: 'Team ID is required' });
  }

  const task = new Task({ 
    title, 
    description, 
    priority,
    dueDate,
    status,
    team: teamId,
    createdBy: userId 
  });

  try {
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/update-task/:id', requireAuth(), async (req, res) => {
  const { title, description, status } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status }, { new: true });
  res.json(task);
});

router.delete('/delete-task/:id', requireAuth(), async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;