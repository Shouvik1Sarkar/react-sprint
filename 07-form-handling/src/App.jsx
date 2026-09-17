import { useState } from "react";

function App() {
  const [title, setTitle] = useState(" ");
  function submitForm(e) {
    e.preventDefault();
    console.log("submitted");
    setTitle("");
  }
  return (
    <>
      <form
        onSubmit={function (e) {
          submitForm(e);
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
