import Note from "./Note";

const NoteList = ({ noteList, updateHandler, deleteHandler }) => {
  return (
    <ul>
      {noteList.map((newNote) => (
        <li key={newNote.id}>
          <Note
            note={newNote}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
          />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
