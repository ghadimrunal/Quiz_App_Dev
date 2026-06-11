// src/components/MyResult.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { resultStyles } from "../assets/dummyStyles";
import axios from "axios";
import { toast } from "react-toastify";

// Badge component
const Badge = ({ percent }) => {
  if (percent >= 85)
    return <span className={resultStyles.badgeExcellent}>Excellent</span>;
  if (percent >= 65)
    return <span className={resultStyles.badgeGood}>Good</span>;
  if (percent >= 45)
    return <span className={resultStyles.badgeAverage}>Average</span>;
  return <span className={resultStyles.badgeNeedsWork}>Needs Work</span>;
};

const MyResult = ({ apiBase = "http://localhost:4000", lastAttempt }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [technologies, setTechnologies] = useState([]);

  const getAuthHeader = useCallback(() => {
    const token = localStorage.getItem("authToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  // 1) SAVE LAST QUIZ RESULT (only if provided)
  useEffect(() => {
    if (!lastAttempt) return;

    const saveResult = async () => {
      try {
        const res = await axios.post(`${apiBase}/api/results`, lastAttempt, {
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeader(),
          },
          timeout: 10000,
        });

        if (res.status === 201 && res.data?.success) {
          toast.success("Result saved!");
        } else {
          toast.warn("Result not saved. Please try again.");
        }
      } catch (err) {
        console.error(
          "Failed to save result:",
          err?.response?.data || err.message || err
        );
        toast.error("Failed to save result.");
      }
    };

    saveResult();
  }, [apiBase, lastAttempt, getAuthHeader]);

  // 2) FETCH RESULTS (always get all, filter client‑side)
  useEffect(() => {
    let mounted = true;

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiBase}/api/results`, {
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeader(),
          },
          timeout: 10000,
        });

        if (!mounted) return;

        if (res.status === 200 && res.data?.success) {
          const all = Array.isArray(res.data.results)
            ? res.data.results
            : [];

          const filtered =
            selectedTechnology &&
            selectedTechnology.toLowerCase() !== "all"
              ? all.filter(
                  (r) =>
                    String(r.technology || "").trim().toLowerCase() ===
                    String(selectedTechnology).trim().toLowerCase()
                )
              : all;

          setResults(filtered);
        } else {
          setResults([]);
          toast.warn("Unexpected server response while fetching results.");
        }
      } catch (err) {
        console.error(
          "Failed to fetch results:",
          err?.response?.data || err.message || err
        );
        if (!mounted) return;

        if (err?.response?.status === 401) {
          setError("Not authenticated. Please log in to view results.");
          toast.error("Not authenticated. Please login.");
        } else {
          setError("Could not load results from server.");
          toast.error("Could not load results from server.");
          setResults([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchResults();
    return () => {
      mounted = false;
    };
  }, [apiBase, selectedTechnology, getAuthHeader]);

  // 3) FETCH TECHNOLOGY LIST (normalized ids)
  useEffect(() => {
    let mounted = true;
    const fetchTechnologies = async () => {
      try {
        const res = await axios.get(`${apiBase}/api/results`, {
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeader(),
          },
          timeout: 10000,
        });

        if (!mounted) return;

        if (res.status === 200 && res.data?.success) {
          const allResults = Array.isArray(res.data.results)
            ? res.data.results
            : [];
          const techSet = new Set();
          allResults.forEach((r) => {
            if (r.technology) {
              techSet.add(String(r.technology).trim().toLowerCase());
            }
          });
          setTechnologies(Array.from(techSet).sort());
        }
      } catch (err) {
        console.error(
          "Failed to fetch technologies:",
          err?.response?.data || err.message || err
        );
      }
    };
    fetchTechnologies();
    return () => {
      mounted = false;
    };
  }, [apiBase, getAuthHeader]);

  const grouped = useMemo(() => {
    const map = {};
    (Array.isArray(results) ? results : []).forEach((r) => {
      const track = (r.title || "").split(" ")[0] || "General";
      if (!map[track]) map[track] = [];
      map[track].push(r);
    });
    return map;
  }, [results]);

  const handleSelectTech = (tech) => {
    setSelectedTechnology(tech || "all");
  };

  const makeKey = (r) => (r?._id ? r._id : `${r.id}||${r.title}`);

  return (
    <div className={resultStyles.pageContainer}>
      <div className={resultStyles.container}>
        {/* HEADER */}
        <header className={resultStyles.header}>
          <div>
            <h1 className={resultStyles.title}>Quiz Results</h1>
            <p className={resultStyles.subtitle}>
              Track your progress across all technologies and levels.
            </p>
          </div>
          <div className={resultStyles.headerControls}></div>
        </header>

        {/* FILTERS */}
        <div className={resultStyles.filterContainer}>
          <div className={resultStyles.filterContent}>
            <div className={resultStyles.filterButtons}>
              <span className={resultStyles.filterLabel}>Filter by tech:</span>

              <button
                onClick={() => handleSelectTech("all")}
                className={`${resultStyles.filterButton} ${
                  selectedTechnology === "all"
                    ? resultStyles.filterButtonActive
                    : resultStyles.filterButtonInactive
                }`}
              >
                All
              </button>

              {technologies.map((techId) => (
                <button
                  key={techId}
                  onClick={() => handleSelectTech(techId)}
                  className={`${resultStyles.filterButton} ${
                    selectedTechnology === techId
                      ? resultStyles.filterButtonActive
                      : resultStyles.filterButtonInactive
                  }`}
                >
                  {techId.toUpperCase()}
                </button>
              ))}
            </div>
            <div className={resultStyles.filterStatus}>
              {selectedTechnology === "all"
                ? "Showing all results"
                : `Filtering: ${selectedTechnology.toUpperCase()}`}
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className={resultStyles.loadingContainer}>
            <div className={resultStyles.loadingSpinner}></div>
            <div className={resultStyles.loadingText}>
              Loading results...
            </div>
          </div>
        )}

        {/* NO DATA */}
        {!loading && results.length === 0 && (
          <div className={resultStyles.emptyState}>
            No results yet. Take some quizzes!
          </div>
        )}

        {/* RESULT GROUPS */}
        {!loading &&
          results.length > 0 &&
          Object.entries(grouped).map(([tech, items]) => (
            <section key={tech} className={resultStyles.trackSection}>
              <h2 className={resultStyles.trackTitle}>{tech} Track</h2>
              <div className={resultStyles.resultsGrid}>
                {items.map((item) => (
                  <StripCard key={makeKey(item)} item={item} />
                ))}
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

function StripCard({ item }) {
  const percent = item?.totalQuestions
    ? Math.round((item.correct / item.totalQuestions) * 100)
    : 0;

  const levelLetter = item?.level ? item.level[0].toUpperCase() : "B";

  const levelStyle =
    item?.level === "basic"
      ? resultStyles.levelBasic
      : item?.level === "intermediate"
      ? resultStyles.levelIntermediate
      : resultStyles.levelAdvanced;

  return (
    <article className={`${resultStyles.card} group`}>
      <div className={resultStyles.cardAccent}></div>
      <div className={resultStyles.cardContent}>
        <div className={resultStyles.cardHeader}>
          <div className={resultStyles.cardInfo}>
            <div className={`${resultStyles.levelAvatar} ${levelStyle}`}>
              {levelLetter}
            </div>
            <div>
              <h3 className={resultStyles.cardTitle}>{item.title}</h3>
              <p className={resultStyles.cardMeta}>
                {item.totalQuestions} Questions
              </p>
            </div>
          </div>
          <div className={resultStyles.cardPerformance}>
            <div className={resultStyles.performanceLabel}>Performance</div>
            <div className={resultStyles.badgeContainer}>
              <Badge percent={percent} />
            </div>
          </div>
        </div>

        <div className={resultStyles.cardStats}>
          <div className="flex flex-col gap-2">
            <div className={resultStyles.correctBox}>
              Correct Answers: {item.correct}
            </div>
            <div className={resultStyles.incorrectBox}>
              Incorrect Answers: {item.wrong}
            </div>
            <div className={resultStyles.statItem}>
              Score:{" "}
              <span className={resultStyles.statNumber}>{percent}%</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyResult;
