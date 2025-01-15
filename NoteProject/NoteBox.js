import { useState } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBox = () => {
  const [noteList, setNoteList] = useState([
    {
      id: Date.now(),
      text: "런닝머신 10.0km/h로 30분",
      createdAt: new Date().toLocaleString(),
    },
    {
      id: Date.now() + 1,
      text: "등 운동 (시티드 로잉 머신)",
      createdAt: new Date().toLocaleString(),
    },
    {
      id: Date.now() + 2,
      text: "등 운동 (랫풀다운 머신)",
      createdAt: new Date().toLocaleString(),
    },
    {
      id: Date.now() + 3,
      text: "등 운동 (덤벨 로우)",
      createdAt: new Date().toLocaleString(),
    },
  ]);

  const addNoteHandler = (text) => {
    const newNote = {
      id: Date.now(),
      text: text,
      createdAt: new Date().toLocaleString(),
    };
    setNoteList([...noteList, newNote]);
  };

  const updateNoteHandler = (note) => {
    const updateNoteList = noteList.map((item) =>
      item.id === note.id
        ? { ...item, text: note.text, createdAt: new Date().toLocaleString() }
        : item
    );
    setNoteList(updateNoteList);
  };

  const deleteNoteHandler = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };
  return (
    <div>
      <h1>태윤이의 오늘의 운동 목표</h1>
      <NoteInput addHandler={addNoteHandler} />
      <NoteList
        noteList={noteList}
        updateHandler={updateNoteHandler}
        deleteHandler={deleteNoteHandler}
      />
    </div>
  );
};

export default NoteBox;
