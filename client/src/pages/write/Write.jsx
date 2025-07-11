import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write({ darkMode }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className={`write ${darkMode ? "dark" : ""}`}>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="preview" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className={`writeInput ${darkMode ? "dark" : ""}`}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            id="description"
            name="description"
            placeholder="Tell your story..."
            className={`writeInput writeText ${darkMode ? "dark" : ""}`}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}





// import { useContext, useState } from "react";
// import "./write.css";
// import axios from "axios";
// import { Context } from "../../context/Context";

// export default function Write({ darkMode }) {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState(null);
//   const { user } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       username: user.username,
//       title,
//       desc,
//     };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       newPost.photo = filename;
//       try {
//         await axios.post("/upload", data);
//       } catch (err) {
//         console.error("Image upload failed:", err);
//       }
//     }

//     try {
//       const res = await axios.post("/posts", newPost);
//       window.location.replace("/post/" + res.data._id);
//     } catch (err) {
//       console.error("Post creation failed:", err);
//     }
//   };

//   return (
//     <div className={`write ${darkMode ? "dark" : ""}`}>
//       {file && (
//         <img className="writeImg" src={URL.createObjectURL(file)} alt="preview" />
//       )}
//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <input
//             id="title"
//             name="title"
//             className={`writeInput ${darkMode ? "dark" : ""}`}
//             placeholder="Title"
//             type="text"
//             autoFocus={true}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             id="desc"
//             name="desc"
//             className={`writeInput writeText ${darkMode ? "dark" : ""}`}
//             placeholder="Tell your story..."
//             type="text"
//             onChange={(e) => setDesc(e.target.value)}
//           ></textarea>
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
