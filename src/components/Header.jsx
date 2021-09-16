const Header = ({ onModeChange, darkMode }) => {
  return (
    <header>
      <h1 className={`"main-header" ${darkMode ? "dark" : ""}`}>Notes</h1>
      <button className="header-mode-button" onClick={onModeChange}>
        {darkMode ? "Brigth Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
