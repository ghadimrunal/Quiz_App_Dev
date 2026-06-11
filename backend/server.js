import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connectDB } from './config/db.js';

import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';
import leaderboardRouter from './routes/leaderboardRoutes.js';

const app = express();

// Use PORT from .env, fallback to 4000
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use('/api/auth', userRouter);
app.use('/api/results', resultRouter);
app.use('/api/leaderboard', leaderboardRouter);

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).send('API WORKING');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server Started on Port ${port}`);
});