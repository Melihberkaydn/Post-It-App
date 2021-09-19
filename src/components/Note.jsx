import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotonePushpin } from "react-icons/ai";
import NoteContext from "../store/note-context";

const Note = (props) => {
  const noteCtx = useContext(NoteContext);

  const onDelete = (id) => {
    return noteCtx.removeNote(id);
  };

  const onPin = (id) => {
    return noteCtx.pinNote(id);
  };

  return (
    <div className="note">
      <AiTwotonePushpin onClick={() => onPin(props.id)} className="pin-icon" />
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <MdDeleteForever
          onClick={() => onDelete(props.id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
