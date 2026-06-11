// frontend/src/pages/MyResultPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import MyResult from "../components/MyResult";

const MyResultPage = () => {
  return (
    <div>
      <Navbar />
      {/* Pass API base explicitly for consistency */}
      <MyResult apiBase="http://localhost:4000" />
    </div>
  );
};

export default MyResultPage;
