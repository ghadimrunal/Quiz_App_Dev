// src/components/Quize.jsx
import React, { useState } from "react";
import axios from "axios";

const apiBase = "http://localhost:4000";

const Quiz = () => {
  // example state – replace with your real quiz logic
  const [questions] = useState([
    { q: "Q1", options: ["a", "b"], answer: 0 },
    { q: "Q2", options: ["a", "b"], answer: 1 },
  ]);
  const [correctCount, setCorrectCount] = useState(0);

  const handleSubmitQuiz = async () => {
    const title = "React Basics Quiz";
    const technology = "React";
    const level = "basic";
    const totalQuestions = questions.length;
    const correct = correctCount;
    const wrong = totalQuestions - correctCount;

    // use ONLY the same key as Login.jsx
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.error("No auth token found. Please log in first.");
      return;
    }

    try {
      await axios.post(
        `${apiBase}/api/results`,
        { title, technology, level, totalQuestions, correct, wrong },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Result saved");
    } catch (err) {
      console.error("Error saving result", err?.response?.data || err.message || err);
    }
  };

  return (
    <>
      {/* your quiz UI here that updates correctCount */}
      {/* <button onClick={handleSubmitQuiz}>Submit Quiz</button> */}
    </>
  );
};

export default Quiz;
