import React, { useContext } from "react";
import { AiTwotonePushpin } from "react-icons/ai";
import Note from "../Note";
import NoteContext from "../../store/note-context";
import classes from "../Pin-Section/Pinner.module.css";

const Pinner = () => {
  const noteCtx = useContext(NoteContext);
  return (
    <React.Fragment>
      <h2 className={classes.header}>
        <AiTwotonePushpin />
        Pinned Notes
      </h2>
      <div className={classes.notes}>
        {noteCtx.pinnedNotes.map((item) => {
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
      <hr className={classes.divider} />
    </React.Fragment>
  );
};

export default Pinner;
