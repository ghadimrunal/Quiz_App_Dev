import React, { useState } from "react";
import { loginStyles, signupStyles } from "../assets/dummyStyles";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  EyeOff,
  Eye,
  User,
  Mail,
  Lock,
  CheckCircle,
} from "lucide-react";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Signup = ({ onSignupSuccess = null }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { label: "Weak", color: "bg-red-500" };
    if (score === 2) return { label: "Medium", color: "bg-yellow-500" };
    return { label: "Strong", color: "bg-green-500" };
  };

  const ALLOWED_DOMAINS = ["gmail.com", "outlook.com", "college.edu"];

  const isValidEmail = (email) => {
    const match = email.match(/^[a-zA-Z0-9._%+-]+@([a-zA-Z]+\.[a-zA-Z]{2,})$/);
    if (!match) return false;
    return ALLOWED_DOMAINS.includes(match[1].toLowerCase());
  };

  const TEMP_DOMAINS = [
    "mailinator.com",
    "tempmail.com",
    "10minutemail.com",
    "guerrillamail.com",
    "yopmail.com"
  ];
  
  const isTemporaryEmail = (email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return TEMP_DOMAINS.includes(domain);
  };
  

  const validate = () => {
    const e = {};

    if (!name.trim()) {
      e.name = "Name is required";
    } else if (name.trim().length < 2) {
      e.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      e.name = "Name can only contain letters";

      if (!email) e.email = "Email is required";
      else if (isTemporaryEmail(email))
        e.email = "Temporary emails are not allowed";
      else if (!isValidEmail(email))
        e.email = "Use gmail, outlook or college email";

      if (!password) e.password = "Password is required";
      else if (password.length < 6)
        e.password = "Password must be at least 6 characters";
    }

    return e;
  };

  const API_BASE = "http://localhost:4000";

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitError("");

    const v = validate();
    setError(v);
    if (Object.keys(v).length) return;

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };

      const resp = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;

      try {
        data = await resp.json();
      } catch (e) {}

      if (!resp.ok) {
        const msg = data?.message || "Registration failed";
        setSubmitError(msg);
        return;
      }

      if (data?.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(
            data.user || {
              name: name.trim(),
              email: email.trim().toLowerCase(),
            }
          )
        );
      }

      if (typeof onSignupSuccess === "function") {
        onSignupSuccess(
          data?.user || {
            name: name.trim(),
            email: email.trim().toLowerCase(),
          }
        );
      }

      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Signup error");
      setSubmitError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={signupStyles.pageContainer}>
      <Link to="/login" className={signupStyles.backButton}>
        <ArrowLeft className={signupStyles.backButtonIcon} />
        <span className={signupStyles.backButtonText}>Back</span>
      </Link>

      <div className={signupStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={signupStyles.animatedBorder}>
            <div className={signupStyles.formContent}>
              <h2 className={signupStyles.heading}>
                <span className={signupStyles.headingIcon}>
                  <CheckCircle className={signupStyles.headingIconInner} />
                </span>
                <span className={signupStyles.headingText}>Create Account</span>
              </h2>

              <p className={signupStyles.subtitle}>
                Sign up to start your Hexagon Quiz journey.
              </p>

              {/* Name */}
              <label className={signupStyles.label}>
                <span className={signupStyles.labelText}>Full Name</span>
                <div className={signupStyles.inputContainer}>
                  <span className={signupStyles.inputIcon}>
                    <User className={signupStyles.inputIconInner} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error.name)
                        setError((s) => ({ ...s, name: undefined }));
                    }}
                    className={`${signupStyles.input} ${
                      error.name
                        ? signupStyles.inputError
                        : signupStyles.inputNormal
                    }`}
                    placeholder="John Doe"
                    required
                  />
                </div>
                {error.name && (
                  <p className={signupStyles.errorText}>{error.name}</p>
                )}
              </label>

              {/* Email */}
              <label className={signupStyles.label}>
                <span className={signupStyles.labelText}>Email</span>
                <div className={signupStyles.inputContainer}>
                  <span className={signupStyles.inputIcon}>
                    <Mail className={signupStyles.inputIconInner} />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);

                      if (!value) {
                        setError((s) => ({ ...s, email: "Email is required" }));
                      } else if (isTemporaryEmail(value)) {
                        setError((s) => ({
                          ...s,
                          email: "Temporary emails are not allowed",
                        }));
                      } else if (!isValidEmail(value)) {
                        setError((s) => ({
                          ...s,
                          email: "Use gmail, outlook or college email",
                        }));
                      } else {
                        setError((s) => ({ ...s, email: undefined }));
                      }
                    }}
                    className={`${signupStyles.input} ${
                      error.email
                        ? signupStyles.inputError
                        : signupStyles.inputNormal
                    }`}
                    placeholder="abc@gmail.com"
                  />
                </div>
                {error.email && (
                  <p className={signupStyles.errorText}>{error.email}</p>
                )}
              </label>

              {/* Password */}
              <label className={signupStyles.label}>
                <span className={signupStyles.labelText}>Password</span>
                <div className={signupStyles.inputContainer}>
                  <span className={signupStyles.inputIcon}>
                    <Lock className={signupStyles.inputIconInner} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error.password)
                        setError((s) => ({ ...s, password: undefined }));
                    }}
                    className={`${signupStyles.input} ${
                      signupStyles.passwordInput
                    } ${
                      error.password
                        ? signupStyles.inputError
                        : signupStyles.inputNormal
                    }`}
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className={signupStyles.passwordToggle}
                  >
                    {showPassword ? (
                      <EyeOff className={signupStyles.passwordToggleIcon} />
                    ) : (
                      <Eye className={signupStyles.passwordToggleIcon} />
                    )}
                  </button>
                </div>
                {error.password && (
                  <p className={signupStyles.errorText}>{error.password}</p>
                )}
              </label>

              {submitError && (
                <p className={signupStyles.submitError} role="alert">
                  {submitError}
                </p>
              )}

              <div className={signupStyles.buttonsContainer}>
                <button
                  type="submit"
                  className={signupStyles.submitButton}
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>
              </div>

              <div className={signupStyles.loginPromptContainer}>
                <span className={signupStyles.loginPromptContainer}>
                  <span className={signupStyles.loginPromptText}>
                    Already have an account?
                  </span>
                </span>
                <Link to="/login" className={loginStyles.signupLink}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style>{signupStyles.animations}</style>
    </div>
  );
};

export default Signup;
