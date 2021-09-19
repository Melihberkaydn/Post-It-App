import NotesList from "./components/Notes/NotesList";
import React, { useContext, useEffect, useState } from "react";
//
import Search from "./components/Layout/Search";
import Header from "./components/Layout/Header";
import AddNote from "./components/Notes/AddNote";
import NoteContext from "./store/note-context";

function App() {
  // const [notes, setNotes] = useState([
  //   { id: nanoid(), text: "This is my first note!", date: "15/04/2021" },
  //   { id: nanoid(), text: "This is my second note!", date: "16/04/2021" },
  //   { id: nanoid(), text: "This is my third note!", date: "17/04/2021" },
  //   { id: nanoid(), text: "This is my fourth note!", date: "18/04/2021" },
  // ]);
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

  // const addNote = (text) => {
  //   const date = new Date();
  //   const newNote = {
  //     id: nanoid(),
  //     text: text,
  //     date: date.toLocaleDateString(),
  //   };

  //   setNotes((prevNotes) => {
  //     return [newNote, ...prevNotes];
  //   });
  // };

  // const deleteNote = (id) => {
  //   const remainingNotes = notes.filter((note) => note.id !== id);
  //   setNotes(remainingNotes);
  // };

  const onFilter = (text) => {
    setFilterText(text);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} onModeChange={changeMode} />
        <Search onFilter={onFilter} />
        <AddNote
        //onAdd={addNote}
        />
        <NotesList
          filterText={filterText}
          darkMode={darkMode}
          // onDelete={deleteNote}
          // onAdd={addNote}
          // notes={notes.filter((note) =>
          //   note.text.toLocaleLowerCase().includes(filterText)
          //)}
        />
      </div>
    </div>
  );
}

export default App;
