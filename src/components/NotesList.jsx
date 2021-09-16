import Note from "./Note";

const NotesList = ({ notes, onDelete }) => {
  return (
    <div className="notes-list">
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
