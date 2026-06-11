// backend/controllers/leaderboardController.js
import Result from '../models/resultModel.js';

export const getLeaderboard = async (req, res) => {
  try {
    console.log('🔥 Fetching leaderboard for user:', req.user._id);

    const leaderboardData = await Result.aggregate([
      {
        $group: {
          _id: '$userId',
          name: { $first: { $ifNull: ['$userName', 'Anonymous'] } },
          totalQuizzes: { $sum: 1 },
          totalCorrect: { $sum: '$correct' },
          totalQuestions: { $sum: '$totalQuestions' },
        },
      },
      {
        $addFields: {
          avgScore: {
            $cond: [
              { $gt: ['$totalQuestions', 0] },
              {
                $round: [
                  {
                    $multiply: [
                      { $divide: ['$totalCorrect', '$totalQuestions'] },
                      100,
                    ],
                  },
                  1,
                ],
              },
              0,
            ],
          },
        },
      },
      { $sort: { avgScore: -1, totalQuizzes: -1 } },
      { $limit: 50 },
      {
        $project: {
          userId: '$_id',
          name: 1,
          avgScore: 1,
          totalQuizzes: 1,
          _id: 0,
        },
      },
    ]);

    const userAgg = await Result.aggregate([
      { $match: { userId: req.user._id } },
      {
        $group: {
          _id: null,
          totalCorrect: { $sum: '$correct' },
          totalQuestions: { $sum: '$totalQuestions' },
          totalQuizzes: { $sum: 1 },
        },
      },
    ]);

    const stats =
      userAgg[0] || { totalCorrect: 0, totalQuestions: 0, totalQuizzes: 0 };

    const currentUserAvg =
      stats.totalQuestions > 0
        ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
        : 0;

    const selfIndex = leaderboardData.findIndex(
      (u) => u.userId.toString() === req.user._id.toString()
    );

    console.log(
      '🏆 Leaderboard users:',
      leaderboardData.length,
      'selfIndex:',
      selfIndex
    );

    const currentUserRank =
      selfIndex >= 0
        ? {
            rank: selfIndex + 1,
            avgScore: leaderboardData[selfIndex].avgScore,
            totalQuizzes: leaderboardData[selfIndex].totalQuizzes,
          }
        : {
            rank: 0,
            avgScore: currentUserAvg,
            totalQuizzes: stats.totalQuizzes || 0,
          };

    return res.json({
      success: true,
      leaderboard: leaderboardData,
      currentUserRank,
    });
  } catch (error) {
    console.error('❌ Leaderboard ERROR:', error);
    return res
      .status(500)
      .json({ success: false, message: error.message || 'Leaderboard unavailable' });
  }
};
