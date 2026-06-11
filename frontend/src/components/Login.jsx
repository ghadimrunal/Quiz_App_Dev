// src/components/Login.jsx
import React, { useState } from 'react';
import { loginStyles } from '../assets/dummyStyles';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, EyeOff, Eye, LogIn, Mail, Lock } from 'lucide-react';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = ({ onLoginSuccess = null }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const API_BASE = "http://localhost:4000";

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!isValidEmail(email)) e.email = "Please enter a valid email";

    if (!password) e.password = "Password is required";

    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitError("");

    const validation = validate();
    setError(validation);
    if (Object.keys(validation).length > 0) return;

    setLoading(true);

    try {
      const payload = { email: email.trim().toLowerCase(), password };

      const resp = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => null);

      if (!resp.ok) {
        setSubmitError(data?.message || "Login failed");
        return;
      }

      if (data?.token) {
        // NEW: store userName for sidebar greeting
        const fullName =
          data.user?.fullName ||
          data.user?.name ||
          data.user?.username ||
          "";

        if (fullName) {
          localStorage.setItem("userName", fullName);
        } else {
          // fallback: derive something from email if backend sends no name
          const derived = payload.email.split("@")[0];
          localStorage.setItem("userName", derived);
        }

        localStorage.setItem("authToken", data.token);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(data.user || { email: payload.email })
        );
      }

      const user = data.user || { email: payload.email };

      window.dispatchEvent(
        new CustomEvent("authChanged", { detail: { user } })
      );

      if (typeof onLoginSuccess === "function") onLoginSuccess(user);

      navigate("/home", { replace: true });
    } catch (err) {
      setSubmitError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={loginStyles.pageContainer}>
      <div className={loginStyles.bubble1}></div>
      <div className={loginStyles.bubble2}></div>

      <Link to="/" className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>Home</span>
      </Link>

      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit} className={loginStyles.form} noValidate>
          <div className={loginStyles.formWrapper}>
            <div className={loginStyles.animatedBorder}>
              <div className={loginStyles.formContent}>
                <h2 className={loginStyles.heading}>
                  <span className={loginStyles.headingIcon}>
                    <LogIn className={loginStyles.headingIconInner} />
                  </span>
                  <span className={loginStyles.headingText}>Login</span>
                </h2>

                <p className={loginStyles.subtitle}>
                  Sign in to continue to Hexagon Quiz.
                </p>

                {/* Email */}
                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Email</span>

                  <div className={loginStyles.inputContainer}>
                    <span className={loginStyles.inputIcon}>
                      <Mail className={loginStyles.inputIconInner} />
                    </span>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error.email)
                          setError((s) => ({ ...s, email: undefined }));
                      }}
                      className={`${loginStyles.input} ${
                        error.email
                          ? loginStyles.inputError
                          : loginStyles.inputNormal
                      }`}
                      placeholder="your@example.com"
                      required
                    />
                  </div>

                  {error.email && (
                    <p className={loginStyles.errorText}>{error.email}</p>
                  )}
                </label>

                {/* Password */}
                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Password</span>

                  <div className={loginStyles.inputContainer}>
                    <span className={loginStyles.inputIcon}>
                      <Lock className={loginStyles.inputIconInner} />
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (error.password)
                          setError((s) => ({ ...s, password: undefined }));
                      }}
                      className={`${loginStyles.input} ${
                        loginStyles.passwordInput
                      } ${
                        error.password
                          ? loginStyles.inputError
                          : loginStyles.inputNormal
                      }`}
                      placeholder="Enter your password"
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className={loginStyles.passwordToggle}
                    >
                      {showPassword ? (
                        <EyeOff className={loginStyles.passwordToggleIcon} />
                      ) : (
                        <Eye className={loginStyles.passwordToggleIcon} />
                      )}
                    </button>
                  </div>

                  {error.password && (
                    <p className={loginStyles.errorText}>{error.password}</p>
                  )}
                </label>

                {/* Server Error */}
                {submitError && (
                  <p className={loginStyles.submitError}>{submitError}</p>
                )}

                {/* Submit Button */}
                <div className={loginStyles.buttonsContainer}>
                  <button
                    type="submit"
                    className={loginStyles.submitButton}
                    disabled={loading}
                  >
                    {loading ? (
                      "Signing in..."
                    ) : (
                      <>
                        <LogIn className={loginStyles.submitButtonIcon} />
                        <span className={loginStyles.submitButtonText}>
                          Sign in
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Signup Link */}
                <div className={loginStyles.signupContainer}>
                  <span className={loginStyles.signupText}>
                    Don’t have an account?
                  </span>
                  <Link to="/signup" className={loginStyles.signupLink}>
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style>{loginStyles.animations}</style>
    </div>
  );
};

export default Login;
