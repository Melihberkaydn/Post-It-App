import NotesList from "./components/Notes/NotesList";
import React, { useContext, useEffect, useState } from "react";
//
import Search from "./components/Layout/Search";
import Header from "./components/Layout/Header";
import AddNote from "./components/Notes/AddNote";
import NoteContext from "./store/note-context";

function Layout() {
  const [filterText, setFilterText] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const noteCtx = useContext(NoteContext);

  // receive data from local storage of the browser
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      noteCtx.setNotes(savedNotes);
    }
  }, []);

  // save notes to the local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(noteCtx.notes));
  }, [noteCtx.notes]);

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const onFilter = (text) => {
    setFilterText(text);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} onModeChange={changeMode} />
        <Search onFilter={onFilter} />
        <AddNote />
        <NotesList filterText={filterText} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Layout;
