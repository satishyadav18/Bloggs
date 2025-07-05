import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrVdTisvOmA6BRbbPu5iQgNugor3V8BCe_w&s"
          alt=""
        />
        <p>
          Hi! I'm Satish Yadav, a CSE student passionate about web development and programming.
    I     love building projects using React, JavaScript, and modern web technologies.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <a href="https://www.facebook.com/satish2118" target="_blank" rel="noopener noreferrer">
              <i className="sidebarIcon fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/satish.yadav.18/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="sidebarIcon fab fa-instagram-square"></i>
            </a>
            <a href="https://pinterest.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="sidebarIcon fab fa-pinterest-square"></i>
            </a>
            <a href="https://x.com/Satish18Yadav" target="_blank" rel="noopener noreferrer">
              <i className="sidebarIcon fab fa-twitter-square"></i>
            </a>
        </div>
      </div>

    </div>
  );
}