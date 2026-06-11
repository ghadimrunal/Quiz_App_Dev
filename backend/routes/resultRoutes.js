// backend/routes/resultRoutes.js
import express from 'express';
import auth from '../middleware/auth.js';
import { getResults, createResult } from '../controllers/resultController.js';

const router = express.Router();

router.get('/', auth, getResults);      // GET  /api/results
router.post('/', auth, createResult);   // POST /api/results

export default router;
