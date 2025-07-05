// import { Link } from "react-router-dom";
// import "./topbar.css";

// export default function Topbar({ currentUser }) {
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="topIcon fab fa-facebook-square"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="topIcon fab fa-instagram-square"></i>
//         </a>
//         <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
//           <i className="topIcon fab fa-pinterest-square"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="topIcon fab fa-twitter-square"></i>
//         </a>
//       </div>

//       <div className="topCenter">
//         <ul className="topList">
          // <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          // <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          // <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          
//           {currentUser && (
//             <li className="topListItem">
//               <Link className="link" to="/write">WRITE</Link>
//             </li>
//           )}
//           <li className="topListItem">{currentUser && "LOGOUT"}</li>
//         </ul>
//       </div>


//       <div className="topRight">
//         {currentUser ? (
//           <>
//             <img
//               className="topImg"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0sZZK1w8Lt1yx-PRBuLTPMR689Y4rDu6wQ&s"
//               alt="Profile"
//             />
//             <Link to="/settings">
//               <i className="topIcon fas fa-cog"></i>
//             </Link>
//           </>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">LOGIN</Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">REGISTER</Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }










import { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar({ currentUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top">
      <div className="topLeft">
        {/* Hamburger icon (mobile only) */}
        <i className="fas fa-bars hamburger" onClick={() => setMenuOpen(!menuOpen)}></i>

        {/* Social icons */}
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

      <div className={`topCenter ${menuOpen ? "showMenu" : ""}`}>
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          {currentUser && <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>}
          {currentUser && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>

      <div className="topRight">
        {currentUser ? (
          <>
            <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0sZZK1w8Lt1yx-PRBuLTPMR689Y4rDu6wQ&s" alt="profile" />
            <Link to="/settings"><i className="topIcon fas fa-cog"></i></Link>
          </>
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
