// backend/routes/leaderboardRoutes.js
import express from 'express';
import auth from '../middleware/auth.js';
import { getLeaderboard } from '../controllers/leaderboardController.js';

const router = express.Router();

router.get('/', auth, getLeaderboard);   // GET /api/leaderboard

export default router;
