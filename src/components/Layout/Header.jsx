import classes from "../Layout/Header.module.css";

const Header = ({ onModeChange, darkMode }) => {
  return (
    <header>
      <h1 className={darkMode ? classes.dark : ""}>Notes</h1>
      <button className={classes.button} onClick={onModeChange}>
        {darkMode ? "Brigth Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
