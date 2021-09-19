import NoteContext from "./note-context";
import React, { useReducer } from "react";
import { nanoid } from "nanoid";

const notes = [
  {
    id: nanoid(),
    text: "New bucket list item: Hike to Zugspitze !",
    date: "15/04/2021",
    pinned: false,
  },
  {
    id: nanoid(),
    text: "Reading suggestion: Neil Gaiman - American Gods!",
    date: "15/04/2021",
    pinned: false,
  },
  {
    id: nanoid(),
    text: "Don't forget to buy milk!!!!",
    date: "19/04/2021",
    pinned: true,
  },
  {
    id: nanoid(),
    text: "Math Homework on Friday!!",
    date: "15/04/2021",
    pinned: true,
  },
  {
    id: nanoid(),
    text: "June's birthday on next week!",
    date: "19/04/2021",
    pinned: true,
  },
];

const defaultNoteState = {
  notes: notes,
  pinnedNotes: notes.filter((note) => {
    return note.pinned === true;
  }),
  unpinnedNotes: notes.filter((note) => {
    return note.pinned === false;
  }),
};

const noteReducer = (state, action) => {
  if (action.type === "SET") {
    return {
      notes: action.item,
      pinnedNotes: action.item.filter((note) => {
        return note.pinned === true;
      }),
      unpinnedNotes: action.item.filter((note) => {
        return note.pinned === false;
      }),
    };
  } else if (action.type === "ADD") {
    const date = new Date();
    const updatedNotes = [
      {
        id: nanoid(),
        text: action.item,
        date: date.toLocaleDateString(),
        pinned: false,
      },
      ...state.notes,
    ];

    return {
      notes: updatedNotes,
      pinnedNotes: state.pinnedNotes,
      unpinnedNotes: updatedNotes.filter((note) => {
        return note.pinned === false;
      }),
    };
  } else if (action.type === "REMOVE") {
    const updatedNotes = state.notes.filter((note) => {
      return note.id !== action.id;
    });
    return {
      notes: updatedNotes,
      pinnedNotes: updatedNotes.filter((note) => {
        return note.pinned === true;
      }),
      unpinnedNotes: updatedNotes.filter((note) => {
        return note.pinned === false;
      }),
    };
  } else if (action.type === "PIN") {
    console.log("Pin function activated");
    const pinnedNoteIndex = state.notes.findIndex((note) => {
      return note.id === action.id;
    });
    let updatedNotes = [...state.notes];
    const pinnedNote = state.notes[pinnedNoteIndex];

    const newNoteState = { ...pinnedNote, pinned: !pinnedNote.pinned };
    updatedNotes[pinnedNoteIndex] = newNoteState;

    return {
      notes: updatedNotes,
      pinnedNotes: updatedNotes.filter((note) => {
        return note.pinned === true;
      }),
      unpinnedNotes: updatedNotes.filter((note) => {
        return note.pinned === false;
      }),
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
    dispatchNoteAction({ type: "PIN", id: id });
  };

  const noteContext = {
    notes: noteState.notes,
    pinnedNotes: noteState.pinnedNotes,
    unpinnedNotes: noteState.unpinnedNotes,
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
