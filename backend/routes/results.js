import express from 'express';
import { getResults, createResult } from '../controllers/resultController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getResults);      // GET /api/results
router.post('/', auth, createResult);   // POST /api/results

export default router;
