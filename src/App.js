import NotesList from "./components/NotesList";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import AddNote from "./components/AddNote";

function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note!", date: "15/04/2021" },
    { id: nanoid(), text: "This is my second note!", date: "16/04/2021" },
    { id: nanoid(), text: "This is my third note!", date: "17/04/2021" },
    { id: nanoid(), text: "This is my fourth note!", date: "18/04/2021" },
  ]);
  const [filterText, setFilterText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // receive data from local storage of the browser
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // save notes to the local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log(darkMode);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  };

  const deleteNote = (id) => {
    const remainingNotes = notes.filter((note) => note.id !== id);
    setNotes(remainingNotes);
  };

  const onFilter = (text) => {
    setFilterText(text);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} onModeChange={changeMode} />
        <Search onFilter={onFilter} />
        <AddNote onAdd={addNote} />
        <NotesList
          onDelete={deleteNote}
          onAdd={addNote}
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(filterText)
          )}
        />
      </div>
    </div>
  );
}

export default App;
