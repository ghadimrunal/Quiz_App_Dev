// backend/controllers/resultController.js
import Result from '../models/resultModel.js';

export const getResults = async (req, res) => {
  try {
    const results = await Result.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .lean();
    res.json({ success: true, results });
  } catch (error) {
    console.error('Get results error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createResult = async (req, res) => {
  try {
    const result = new Result({
      ...req.body,
      userId: req.user._id,
      userName: req.user.name || 'Anonymous',
    });
    await result.save();
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error('Create result error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
