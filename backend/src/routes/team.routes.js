// import Router from 'express';
// import { requireAuth, getAuth } from "@clerk/express";
// import Team from '../models/Team.model.js';
// import generateCode  from "../utils/generateCode.js";
// const router = Router();

// router.post('/register-team',requireAuth(), async(req, res) => {
//     const {name} = req.body;
//     const {userId} = getAuth(req);
//     const code = generateCode();
//     Team.create({name , code , members: [userId]})
//     .then(team => {
//         console.log(team);
//         res.status(200).json(team);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({error: err.message});
//     })

// });

// router.post('/join-team', requireAuth(), async (req, res) => {
//     const { code } = req.body;
//     const { userId } = getAuth(req);
  
//     try {
//       const team = await Team.findOne({ code });
//       if (!team) {
//         return res.status(404).json({ error: 'Team not found' });
//       }
  
//       if (team.members.includes(userId)) {
//         return res.status(400).json({ error: 'User already in team' });
//       }
  
//       team.members.push(userId);
//       await team.save();
//       res.status(200).json(team);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: err.message });
//     }
//   });
//   router.get('/get-teams', requireAuth(), async (req, res) => {
//     const { userId } = getAuth(req);
//     try {
//       const teams = await Team.find({ members: userId });
//       res.status(200).json(teams);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: err.message });
//     }
//   });
// export default router;




import { Router } from 'express';
import Team from '../models/Team.model.js';
import { clerkMiddleware } from '@clerk/express';

const router = Router();

router.post('/register-team', clerkMiddleware(), async (req, res) => {
  const { name } = req.body;
  const code = Math.random().toString(36).substring(7);
  const team = new Team({ name, code, members: [req.auth.userId] });
  await team.save();
  res.json(team);
});

router.post('/join-team', clerkMiddleware(), async (req, res) => {
  const { code } = req.body;
  const team = await Team.findOne({ code });
  if (!team) return res.status(404).json({ message: 'Team not found' });
  if (!team.members.includes(req.auth.userId)) team.members.push(req.auth.userId);
  await team.save();
  res.json(team);
});

router.get('/get-teams', clerkMiddleware(), async (req, res) => {
  const teams = await Team.find({ members: req.auth.userId });
  res.json(teams);
});

export default router;