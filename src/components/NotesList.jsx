import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, onAdd, onDelete }) => {
  return (
    <div className="notes-list">
      <AddNote onAdd={onAdd} />
      {notes.map((item) => {
        return (
          <Note
            onDelete={onDelete}
            key={item.id}
            id={item.id}
            text={item.text}
            date={item.date}
          ></Note>
        );
      })}
    </div>
  );
};

export default NotesList;
