import classs from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ addPostHandler, onClose }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      title: title,
      name: name,
    };
    if (title.trim() === "" || name.trim() === "") {
      return;
    }
    addPostHandler(postData);
  }

  return (
    <div className={classs["new-post"]}>
      <form onSubmit={submitHandler}>
        <label>Post Title</label>
        <input type="text" onChange={handleTitleChange} />
        <label>Your Name</label>
        <input type="text" onChange={handleNameChange} />
        <div className={classs.btnGroup}>
          <button onClick={onClose}>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
