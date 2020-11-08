import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setTitle] = useState("");
  const [noteNote, setNote] = useState("");

  const noteFinal = { title: noteTitle, note: noteNote };

  function titleHandle(event) {
    setTitle(event.target.value);
    console.log(noteTitle);
  }
  function noteHandle(event) {
    setNote(event.target.value);
    console.log(noteNote);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={titleHandle}
          value={noteTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={noteHandle}
          value={noteNote}
        />
        <button onClick={() => props.clicked(noteFinal, setNote, setTitle)}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
