// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "./context/Context";

// // Components
// import TopBar from "./components/topbar/TopBar";

// // Pages
// import Home from "./pages/homepage/HomePage";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";

// function App() {
//   const { user } = useContext(Context); // get user from context

//   return (
//     <Router>
//       {/* ✅ Pass user as currentUser prop */}
//       <TopBar currentUser={user} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
//         <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
//         <Route path="/write" element={user ? <Write /> : <Navigate to="/login" />} />
//         <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />
//         <Route path="/post/:postId" element={<Single />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context/Context";

// Components
import TopBar from "./components/topbar/TopBar";

// Pages
import Home from "./pages/homepage/HomePage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const { user } = useContext(Context);

  // ✅ Dark Mode State
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        {/* Pass dark mode props to TopBar */}
        <TopBar currentUser={user} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register darkMode={darkMode} />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login darkMode={darkMode} />} />
          <Route path="/write" element={user ? <Write darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/settings" element={user ? <Settings darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/post/:postId" element={<Single darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
