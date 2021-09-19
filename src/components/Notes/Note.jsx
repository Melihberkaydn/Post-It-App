import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotonePushpin } from "react-icons/ai";
import NoteContext from "../../store/note-context";
import classes from "../Notes/Note.module.css";

const Note = (props) => {
  const noteCtx = useContext(NoteContext);

  const onDelete = (id) => {
    return noteCtx.removeNote(id);
  };

  const onPin = (id) => {
    return noteCtx.pinNote(id);
  };

  return (
    <div className={classes.note}>
      <AiTwotonePushpin
        onClick={() => onPin(props.id)}
        className={classes.pin}
      />
      <span>{props.text}</span>
      <div className={classes.footer}>
        <small>{props.date}</small>
        <MdDeleteForever
          onClick={() => onDelete(props.id)}
          className={classes.delete}
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
