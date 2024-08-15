import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import "./index.css";

import { useState } from "react";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function hideModalHandler() {
    setModalIsOpen(false);
  }

  function openModalHandler() {
    setModalIsOpen(true);
  }
  return (
    <>
      <MainHeader openModalHandler={openModalHandler} />
      <main>
        <PostsList
          modalIsOpen={modalIsOpen}
          hideModalHandler={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
