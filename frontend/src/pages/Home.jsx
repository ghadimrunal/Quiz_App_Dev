import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Quiz from "../components/Quize";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // Redirect to login page if not logged in
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      {isLoggedIn && <Quiz />}
    </div>
  );
};

export default Home;
