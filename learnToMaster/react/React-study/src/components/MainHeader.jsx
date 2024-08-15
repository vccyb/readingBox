import classes from "./MainHeader.module.css";
// import './MainHeader.css';

function MainHeader({ openModalHandler }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>React Study</h1>
      <button className={classes.button} onClick={openModalHandler}>
        Add New
      </button>
    </header>
  );
}

export default MainHeader;
