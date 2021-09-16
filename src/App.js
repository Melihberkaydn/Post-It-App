import NotesList from "./components/NotesList";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note!", date: "15/04/2021" },
    { id: nanoid(), text: "This is my second note!", date: "16/04/2021" },
    { id: nanoid(), text: "This is my third note!", date: "17/04/2021" },
    { id: nanoid(), text: "This is my fourth note!", date: "18/04/2021" },
  ]);

  const [filterText, setFilterText] = useState("");

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
    <div className="container">
      <Search onFilter={onFilter} />
      <NotesList
        onDelete={deleteNote}
        onAdd={addNote}
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(filterText)
        )}
      />
    </div>
  );
}

export default App;
