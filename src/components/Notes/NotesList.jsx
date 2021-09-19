import Note from "./Note";
import React, { useContext } from "react";
import NoteContext from "../../store/note-context";
import Pinner from "../Pin-Section/Pinner";
import classes from "../Notes/NotesList.module.css";

const NotesList = ({ filterText, darkMode }) => {
  console.log("NOTES LIST RENDER");

  const noteCtx = useContext(NoteContext);

  const filteredNotes = noteCtx.unpinnedNotes.filter((note) => {
    return note.text.toLocaleLowerCase().includes(filterText);
  });

  return (
    <React.Fragment>
      <Pinner darkMode={darkMode} />
      <div className={classes.notes}>
        {filteredNotes.map((item) => {
          return (
            <Note
              //onDelete={onDelete}
              key={item.id}
              id={item.id}
              text={item.text}
              date={item.date}
            ></Note>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default NotesList;
