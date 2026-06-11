import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";
import MyResultPage from "./pages/MyResultPage";
import LeaderboardPage from "./pages/LeaderboardPage";  // 🔥 NEW

// Private Protected Route
function RequireAuth({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* 🔥 Make quiz page protected */}
      <Route
        path="/quiz"
        element={
          <RequireAuth>
            <Sidebar />
          </RequireAuth>
        }
      />

      <Route
        path="/result"
        element={
          <RequireAuth>
            <MyResultPage />
          </RequireAuth>
        }
      />

      {/* 🔥 NEW LEADERBOARD ROUTE */}
      <Route
        path="/leaderboard"
        element={
          <RequireAuth>
            <LeaderboardPage />
          </RequireAuth>
        }
      />

      {/* Redirect old sidebar to quiz */}
      <Route path="/sidebar" element={<Navigate to="/quiz" replace />} />
    </Routes>
  );
};

export default App;
