import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ use existing navbar as-is
import { Brain, Trophy, Rocket } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 relative overflow-hidden">
      {/* Navbar (UNCHANGED) */}
      <Navbar />

      {/* Decorative background bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 left-1/4 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float-slower" />
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Learn Faster with
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Skill-Based Quizzes
          </span>
        </h1>

        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-lg mb-10">
          Pick a technology, choose your level, test your knowledge, and climb
          the leaderboard. Compete, learn, and grow — all in one place.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
          >
            <Rocket className="w-5 h-5" />
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-slate-700 font-semibold shadow hover:scale-[1.02] transition"
          >
            Sign in
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Brain />}
            title="Level-Wise Quizzes"
            desc="Basic, Intermediate & Difficult levels designed to match your skills."
          />
          <FeatureCard
            icon={<Trophy />}
            title="Competitive Leaderboards"
            desc="Earn medals, rank up, and see how you stack against others."
          />
          <FeatureCard
            icon={<Rocket />}
            title="Track Your Growth"
            desc="Detailed results, accuracy stats, and performance insights."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Quiz Platform • Learn • Compete • Improve
      </footer>
    </div>
  );
};

/* ---------------- FEATURE CARD ---------------- */

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] text-center hover:-translate-y-1 transition">
    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full shadow mb-4">
      {React.cloneElement(icon, { className: "w-6 h-6 text-indigo-700" })}
    </div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2">
      {title}
    </h3>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);

export default LandingPage;
