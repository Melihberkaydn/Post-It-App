import classes from "../Layout/Header.module.css";

const Header = ({ onModeChange, darkMode }) => {
  return (
    <header>
      <h1 className={darkMode ? classes.dark : ""}>Post-it</h1>
      <nav>
        <ul className={classes.list}>
          <li>
            <button className={classes.button} onClick={onModeChange}>
              {darkMode ? "Bright Mode" : "Dark Mode"}
            </button>
          </li>
          <li>
            {/* <NavLink to="/auth?mode=login" className={classes.button}>
              Login
            </NavLink> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
