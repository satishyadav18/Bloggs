import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setDarkMode(savedTheme === "dark");
  }, []);

  return (
    <div className={`top ${darkMode ? "dark" : ""}`}>
      <div className="topLeft">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        {/* Social Icons */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
      </div>

      <div className={`topCenter ${menuOpen ? "showMenu" : ""} ${darkMode ? "dark" : ""}`}>
        <ul className={`topList ${darkMode ? "dark" : ""}`}>
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>LOGOUT</li>
          )}
        </ul>
      </div>

      <div className="topRight">
        {/* Theme Toggle */}
        <i
          className={`topThemeIcon fas ${darkMode ? "fa-sun" : "fa-moon"}`}
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{ cursor: "pointer", marginRight: "10px", fontSize: "18px" }}
        ></i>

        {/* Profile / Login Buttons */}
        {user ? (
        <Link to="/settings">
          <img
            className="topImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg"
            }
          alt="profile"
        />
        </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
