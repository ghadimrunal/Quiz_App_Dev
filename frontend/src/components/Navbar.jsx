import React, { useEffect, useState } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import { NavLink, useNavigate } from "react-router-dom";
import { Award, LogIn, LogOut, Menu, X, Trophy } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const u = localStorage.getItem("authToken");
      setLoggedIn(!!u);
    } catch {
      setLoggedIn(false);
    }

    const handler = (ev) => {
      const detailUser = ev?.detail?.user ?? null;
      setLoggedIn(!!detailUser);
    };
    window.addEventListener("authChanged", handler);
    return () => window.removeEventListener("authChanged", handler);
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("currentUser");
    } catch {}

    window.dispatchEvent(
      new CustomEvent("authChanged", { detail: { user: null } })
    );

    setMenuOpen(false);

    try {
      navigate("/");
    } catch {
      window.location.href = "/login";
    }
  };

  return (
    <nav className={navbarStyles.nav}>
      {/* Gradient background strip */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(129,140,248,0.85), rgba(139,92,246,0.85), rgba(244,114,182,0.85))",
        }}
        className={navbarStyles.decorativePattern}
      />

      {/* Floating bubbles */}
      <div className={navbarStyles.bubble1}></div>
      <div className={navbarStyles.bubble2}></div>
      <div className={navbarStyles.bubble3}></div>

      <div className={navbarStyles.container}>
        {/* Brand on left */}
        <div className={navbarStyles.titleContainer}>
          <NavLink to="/home" className={navbarStyles.titleText}>
            TechBit
          </NavLink>
        </div>

        {/* Desktop actions */}
        <div className={navbarStyles.desktopButtonsContainer}>
          <div className={navbarStyles.spacer}></div>

          <NavLink to="/leaderboard" className={navbarStyles.resultsButton}>
            <Trophy className={navbarStyles.buttonIcon} />
            Leaderboard
          </NavLink>

          <NavLink to="/result" className={navbarStyles.resultsButton}>
            <Award className={navbarStyles.buttonIcon} />
            My Result
          </NavLink>

          {loggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className={navbarStyles.logoutButton}
            >
              <LogOut className={navbarStyles.buttonIcon} />
              Logout
            </button>
          ) : (
            <NavLink to="/login" className={navbarStyles.loginButton}>
              <LogIn className={navbarStyles.buttonIcon} />
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile menu */}
        <div className={navbarStyles.mobileMenuContainer}>
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className={navbarStyles.menuToggleButton}
          >
            {menuOpen ? (
              <X className={navbarStyles.menuIcon} />
            ) : (
              <Menu className={navbarStyles.menuIcon} />
            )}
          </button>

          {menuOpen && (
            <div className={navbarStyles.mobileMenuPanel}>
              <ul className={navbarStyles.mobileMenuList}>
                <li>
                  <NavLink
                    to="/leaderboard"
                    className={navbarStyles.mobileMenuItem}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Trophy className={navbarStyles.mobileMenuIcon} />
                    Leaderboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/result"
                    className={navbarStyles.mobileMenuItem}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Award className={navbarStyles.mobileMenuIcon} />
                    My Result
                  </NavLink>
                </li>

                {loggedIn ? (
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className={navbarStyles.mobileMenuItem}
                    >
                      <LogOut className={navbarStyles.mobileMenuIcon} />
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className={navbarStyles.mobileMenuItem}
                      onClick={() => setMenuOpen(false)}
                    >
                      <LogIn className={navbarStyles.mobileMenuIcon} />
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style>{navbarStyles.animations}</style>
    </nav>
  );
};

export default Navbar;
