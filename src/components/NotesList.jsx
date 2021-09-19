import Note from "./Note";
import React, { useContext } from "react";
import NoteContext from "../store/note-context";
import Pinner from "./Pin-Section/Pinner";

const NotesList = ({ filterText }) => {
  console.log("NOTES LIST RENDER");

  const noteCtx = useContext(NoteContext);

  const filteredNotes = noteCtx.unpinnedNotes.filter((note) => {
    return note.text.toLocaleLowerCase().includes(filterText);
  });

  return (
    <React.Fragment>
      <Pinner />
      <div className="notes-list">
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
