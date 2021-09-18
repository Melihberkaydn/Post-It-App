import NoteContext from "./note-context";
import React, { useReducer } from "react";
import { nanoid } from "nanoid";

const defaultNoteState = {
  notes: [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
      pinned: false,
    },
  ],
  pinnedNotes: [
    {
      id: nanoid(),
      text: "Pinned Second Note!",
      date: "15/04/2021",
      pinned: true,
    },
    {
      id: nanoid(),
      text: "Pinned first note!",
      date: "19/04/2021",
      pinned: true,
    },
  ],
};

const noteReducer = (state, action) => {
  if (action.type === "SET") {
    return {
      notes: action.item,
      pinnedNotes: state.pinnedNotes,
    };
  } else if (action.type === "ADD") {
    const date = new Date();
    const newNotes = [
      {
        id: nanoid(),
        text: action.item,
        date: date.toLocaleDateString(),
        pinned: false,
      },
      ...state.notes,
    ];

    return {
      notes: newNotes,
      pinnedNotes: state.pinnedNotes,
    };
  } else if (action.type === "REMOVE") {
    const newNotes = state.notes.filter((note) => {
      return note.id !== action.id;
    });
    return {
      notes: newNotes,
      pinnedNotes: state.pinnedNotes,
    };
  } else if (action.type === "PIN") {
    const pinnedNoteIndex = state.notes.findIndex((note) => {
      return note.id === action.id;
    });
    let updatedNotes = [...state.notes];
    const pinnedNote = state.notes[pinnedNoteIndex];

    console.log(updatedNotes);
    console.log(pinnedNote);
    // const newNoteState = { ...pinnedNote, pinned: !pinnedNote.pinned };
    // updatedNotes[pinnedNoteIndex] = newNoteState;

    // const pinnedNotes = updatedNotes.filter((note) => {
    //   return note.pinned !== true;
    // });

    // updatedNotes = updatedNotes.filter((note) => {
    //   return note.pinned !== true;
    // });

    return {
      //notes: updatedNotes,
      //pinnedNotes: pinnedNotes,
    };
  }

  return defaultNoteState;
};

const NoteProvider = (props) => {
  const [noteState, dispatchNoteAction] = useReducer(
    noteReducer,
    defaultNoteState
  );

  const setNotes = (notes) => {
    dispatchNoteAction({ type: "SET", item: notes });
  };

  const addNote = (text) => {
    dispatchNoteAction({ type: "ADD", item: text });
  };

  const removeNote = (id) => {
    dispatchNoteAction({ type: "REMOVE", id: id });
  };

  const pinNote = (id) => {
    dispatchNoteAction({ type: "PIN", item: id });
  };

  const noteContext = {
    notes: noteState.notes,
    pinnedNotes: noteState.pinnedNotes,
    setNotes: setNotes,
    addNote: addNote,
    removeNote: removeNote,
    pinNote: pinNote,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
