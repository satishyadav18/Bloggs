// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./sidebar.css";

// export default function Sidebar() {
//   const [cats, setCats] = useState([]);

//   useEffect(() => {
//     const getCats = async () => {
//       const res = await axios.get("/categories");
//       setCats(res.data);
//     };
//     getCats();
//   }, []);
//   return (
//     <div className="sidebar">
//       <div className="sidebarItem">
//         <span className="sidebarTitle">ABOUT ME</span>
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrVdTisvOmA6BRbbPu5iQgNugor3V8BCe_w&s"
//           alt=""
//         />
//         <p>
//           Hi! I'm Satish Yadav, a CSE student passionate about web development and programming.
//     I     love building projects using React, JavaScript, and modern web technologies.
//         </p>
//       </div>
//       <div className="sidebarItem">
//         <span className="sidebarTitle">CATEGORIES</span>
//         <ul className="sidebarList">
//           {cats.map((c) => (
//             <Link to={`/?cat=${c.name}`} className="link" key={c._id || c.name}>
//             <li className="sidebarListItem">{c.name}</li>
//             </Link>
//           ))}
//         </ul>
//       </div>
//       <div className="sidebarItem">
//         <span className="sidebarTitle">FOLLOW US</span>
//         <div className="sidebarSocial">
//             <a href="https://www.facebook.com/satish2118" target="_blank" rel="noopener noreferrer">
//               <i className="sidebarIcon fab fa-facebook-square"></i>
//             </a>
//             <a href="https://www.instagram.com/satish.yadav.18/?hl=en" target="_blank" rel="noopener noreferrer">
//               <i className="sidebarIcon fab fa-instagram-square"></i>
//             </a>
//             <a href="https://pinterest.com/yourpage" target="_blank" rel="noopener noreferrer">
//               <i className="sidebarIcon fab fa-pinterest-square"></i>
//             </a>
//             <a href="https://x.com/Satish18Yadav" target="_blank" rel="noopener noreferrer">
//               <i className="sidebarIcon fab fa-twitter-square"></i>
//             </a>
//         </div>
//       </div>
//     </div>
//   );
// }



import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({ darkMode }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories");
        setCats(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    getCats();
  }, []);

  return (
    <div className={`sidebar ${darkMode ? "dark" : ""}`}>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrVdTisvOmA6BRbbPu5iQgNugor3V8BCe_w&s"
          alt="Satish Yadav"
        />
        <p>
          Hi! I'm Satish Yadav, a CSE student passionate about web development and programming.
          I love building projects using React, JavaScript, and modern web technologies.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" key={c._id || c.name}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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
