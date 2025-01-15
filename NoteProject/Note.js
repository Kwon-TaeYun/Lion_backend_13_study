import { useState } from "react";

const Note = ({ note, updateHandler, deleteHandler }) => {
  const [text, setText] = useState(note.text);
  const [id, setId] = useState(note.id);
  const [createdAt, setCreatedAt] = useState(note.createdAt);
  const [updateMode, setUpdateMode] = useState(false);
  const changeUpdateMode = () => {
    if (updateMode === false) {
      setUpdateMode(true);
    } else {
      setUpdateMode(false);
    }
  };

  const changeTextHandler = (e) => {
    setId(id);
    setText(e.target.value);
    setCreatedAt(new Date().toLocaleString());
  };

  const updateOptionHandler = () => {
    if (text === "") return;

    updateHandler({
      id: note.id,
      text: text,
      createdAt: new Date().toLocaleString(),
    });

    changeUpdateMode(); // 수정 모드 종료
  };
  if (!updateMode) {
    return (
      <>
        {note.text} <button onClick={changeUpdateMode}>수정</button>
        <button
          onClick={() => {
            deleteHandler(note.id);
          }}
        >
          삭제
        </button>
        <br />
        {"created: " + note.createdAt}
      </>
    );
  } else {
    return (
      <>
        <input value={text} onChange={changeTextHandler}></input>{" "}
        <button onClick={updateOptionHandler}>수정</button>
        <button onClick={changeUpdateMode}>취소</button>
      </>
    );
  }
};

export default Note;
