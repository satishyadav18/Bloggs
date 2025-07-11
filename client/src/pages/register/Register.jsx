import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 for toggle

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      if (res.status === 200) {
        window.location.replace("/login");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong!";
      setError(msg);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <div className="passwordField">
          <input
            type={showPassword ? "text" : "password"}
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ cursor: "pointer", marginLeft: "-30px", color: "#555" }}
          ></i>
        </div>

        <button className="registerButton" type="submit">
          Register
        </button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>

      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
      )}
    </div>
  );
}

