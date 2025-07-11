import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { dispatch, isFetching } = useContext(Context);

  const [showPassword, setShowPassword] = useState(false); // 👈 Toggle for password

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />

        <label>Password</label>
        <div className="passwordField">
          <input
            type={showPassword ? "text" : "password"}
            className="loginInput"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ cursor: "pointer", position: "absolute", right: "10px", color: "#555" }}
          ></i>
        </div>

        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
