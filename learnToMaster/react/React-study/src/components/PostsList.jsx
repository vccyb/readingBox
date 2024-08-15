import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";

import Modal from "./Modal";

function PostsList({ modalIsOpen, hideModalHandler }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(post) {
    post.id = Date.now();
    setPosts((prevPosts) => [...prevPosts, post]);
  }

  let modalContent;
  if (modalIsOpen) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost onClose={hideModalHandler} addPostHandler={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} title={post.title} name={post.name} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
