// src/components/Leaderboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trophy, Crown, Medal, User, Award } from 'lucide-react';
import { leaderboardStyles } from '../assets/leaderboardStyles';
import { toast } from 'react-toastify';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUserRank, setCurrentUserRank] = useState(null);

  const API_BASE = 'http://localhost:4000';

  const getAuthHeader = () => {
    const token = localStorage.getItem('authToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/api/leaderboard`, {
        headers: getAuthHeader(),
        timeout: 10000,
      });

      if (res.data?.success) {
        setLeaderboard(res.data.leaderboard || []);
        setCurrentUserRank(res.data.currentUserRank);
      }
    } catch (err) {
      console.error('Leaderboard fetch error:', err);
      setError('Failed to load leaderboard');
      toast.error('Failed to load leaderboard');
    } finally {
      setLoading(false);
    }
  };

  const Top3Card = ({ user, rank }) => {
    const rankColors = {
      1: { icon: Crown },
      2: { icon: Medal },
      3: { icon: Medal },
    };
    const RankIcon = rankColors[rank]?.icon || User;

    return (
      <div className={leaderboardStyles.top3Card}>
        <div
          className={`
            ${leaderboardStyles.top3Avatar}
            ${leaderboardStyles['rank' + rank] || ''}
          `}
        >
          <RankIcon className="w-7 h-7 text-white" />
          {/* small 1/2/3 badge */}
          <span className={leaderboardStyles.top3RankBadge}>{rank}</span>
        </div>
        <h3 className={leaderboardStyles.top3Name}>{user.name || 'Anonymous'}</h3>
        <div className={leaderboardStyles.top3Score}>{user.avgScore}%</div>
        <div className="text-xs text-gray-500 mt-1 text-center">
          {user.totalQuizzes} quizzes
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={leaderboardStyles.pageContainer}>
        <div className="flex items-center justify-center h-40 text-gray-500 text-sm">
          Loading leaderboard...
        </div>
      </div>
    );
  }

  return (
    <div className={leaderboardStyles.pageContainer}>
      <style>{leaderboardStyles.animations}</style>

      {/* HEADER */}
      <header className={leaderboardStyles.header}>
        <div className={leaderboardStyles.trophySection}>
          <div className={`${leaderboardStyles.trophyIcon} trophy-float glow`}>
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" />
          </div>
        </div>
        <h1 className={leaderboardStyles.title}>Leaderboard</h1>
        <p className={leaderboardStyles.subtitle}>
          Top Tech Masters Ranked by Average Score
        </p>
      </header>

      {/* YOUR RANK */}
      {currentUserRank && (
        <div className={leaderboardStyles.yourRank}>
          <h3 className={leaderboardStyles.yourRankTitle}>
            Your Rank #{currentUserRank.rank}
          </h3>
          <div className={leaderboardStyles.rankBadge}>
            <Award size={16} />
            <span>{currentUserRank.avgScore}% Average</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
            Keep crushing quizzes to climb higher! 🚀
          </p>
        </div>
      )}

      <div className={leaderboardStyles.leaderboardContainer}>
        {/* TOP 3 */}
        <div className={leaderboardStyles.sidebar}>
          <div className={leaderboardStyles.top3Container}>
            {leaderboard.slice(0, 3).map((user, idx) => (
              <Top3Card key={user.userId || idx} user={user} rank={idx + 1} />
            ))}
          </div>
        </div>

        {/* FULL LIST */}
        <div className={leaderboardStyles.main}>
          <div className={leaderboardStyles.fullList}>
            <div className={leaderboardStyles.tableHeader}>
              <div className="grid grid-cols-4 items-center font-semibold">
                <span>#</span>
                <span>User</span>
                <span className="text-center">Average</span>
                <span className="text-right">Quizzes</span>
              </div>
            </div>

            {leaderboard.length === 0 ? (
              <div className={leaderboardStyles.emptyState}>
                <User size={40} className="mx-auto mb-3 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-600 mb-1">
                  No rankings yet
                </h3>
                <p className="text-sm">
                  Be the first to take quizzes and claim the top spot!
                </p>
              </div>
            ) : (
              leaderboard.map((user, idx) => (
                <div
                  key={user.userId || idx}
                  className={`${leaderboardStyles.tableRow} grid grid-cols-4 items-center`}
                >
                  <div
                    className={`${leaderboardStyles.rankCell} ${
                      idx < 3 ? 'text-yellow-500' : 'text-gray-800'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className={leaderboardStyles.userCell}>
                    {user.name || 'Anonymous'}
                  </div>
                  <div className={`${leaderboardStyles.scoreCell} text-center`}>
                    {user.avgScore}%
                  </div>
                  <div className="text-right font-semibold text-gray-700">
                    {user.totalQuizzes}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;