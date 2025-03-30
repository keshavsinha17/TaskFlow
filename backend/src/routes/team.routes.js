import Router from 'express';
import { getAuth } from "@clerk/express";
import Team from '../models/Team.model.js';
import generateCode from '../utils/generateCode.js';
const router = Router();

// Get all teams for the authenticated user
router.get('/', async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const teams = await Team.find({ members: userId });
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ message: 'Failed to fetch teams' });
  }
});

// Get a specific team by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = getAuth(req);
    
    const team = await Team.findById(id);
    
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    
    // Check if user is a member of the team
    if (!team.members.includes(userId)) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }
    
    res.json(team);
  } catch (error) {
    console.error('Error fetching team:', error);
    res.status(500).json({ message: error.message });
  }
});

// Register a new team
router.post('/register-team', async (req, res) => {
  const { name } = req.body;
  const { userId } = getAuth(req);
  
  try {
    const team = await Team.create({ name, code: generateCode(), members: [userId] });
    res.status(200).json(team);
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ message: error.message });
  }
});

// Join an existing team
router.post('/join-team', async (req, res) => {
  const { code } = req.body;
  const { userId } = getAuth(req);
  
  try {
    const team = await Team.findOne({ code });
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    if (team.members.includes(userId)) {
      return res.status(400).json({ message: 'User is already a member of this team' });
    }

    team.members.push(userId);
    await team.save();
    res.json(team);
  } catch (error) {
    console.error('Error joining team:', error);
    res.status(500).json({ message: error.message });
  }
});

// Leave a team
router.post('/:id/leave', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = getAuth(req);
    
    const team = await Team.findById(id);
    
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    
    // Check if user is a member of the team
    if (!team.members.includes(userId)) {
      return res.status(400).json({ message: 'You are not a member of this team' });
    }
    
    // Remove user from team members
    team.members = team.members.filter(memberId => memberId !== userId);
    await team.save();
    
    res.json({ message: 'Successfully left the team' });
  } catch (error) {
    console.error('Error leaving team:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;