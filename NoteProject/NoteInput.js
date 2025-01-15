import { useState } from "react";

const NoteInput = ({ addHandler }) => {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const clickHandler = () => {
    if (input === "") return;
    addHandler(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="노트 내용 입력"
        value={input}
        onChange={changeHandler}
      ></input>
      <> </>
      <button onClick={clickHandler}>입력</button>
    </div>
  );
};

export default NoteInput;
