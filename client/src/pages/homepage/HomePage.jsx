// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";
// import axios from "axios";
// // import { useLocation } from "react-router";

// export default function Homepage() {
//   const [posts, setPosts] = useState([]);
//   const { search } = useLocation();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts" + search);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [search]);
//   return (
//     <>
//         <Header />
//       <div className="home">
//         <Posts posts={posts}/>
//         <Sidebar />
//       </div>
//     </>
//   );
// }


import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./homepage.css";
import axios from "axios";

export default function Homepage({ darkMode }) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect if not logged in
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    if (user) fetchPosts();
  }, [search, user]);

  return (
    <>
      <Header darkMode={darkMode} />
      {user && (
        <div className={`home ${darkMode ? "dark" : ""}`}>
          <Posts posts={posts} />
          <Sidebar darkMode={darkMode} />
        </div>
      )}
    </>
  );
}
