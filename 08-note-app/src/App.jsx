import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [task, setTask] = useState([]);

  function submitFunction(e) {
    e.preventDefault();
    console.log("submit.");
    const copy_task = [...task];
    console.log(task);

    copy_task.push({ title, content });
    setTask(copy_task);
    console.log(copy_task);

    setTitle("");
    setContent("");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}

        <section className="border-b border-zinc-500 p-8 md:p-12 lg:border-r lg:border-b-0 lg:p-16">
          {/* HEADING + IMAGE */}
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-4xl font-bold md:text-5xl">Add Notes</h1>

            <div
              className="h-[120px] w-[120px] bg-contain bg-center bg-no-repeat scale-x-[-1]"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png')",
              }}
            />
          </div>

          {/* FORM */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              submitFunction(e);
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Note title"
              className="w-full rounded-md border-2 border-zinc-300 bg-transparent px-5 py-4 text-lg text-white outline-none transition focus:border-white"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              name="description"
              placeholder="Write your note..."
              rows="6"
              className="w-full resize-none rounded-md border-2 border-zinc-300 bg-transparent px-5 py-4 text-lg text-white outline-none transition focus:border-white"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />

            <button
              type="submit"
              className="w-full rounded-md bg-white py-4 text-lg font-semibold text-black transition hover:bg-zinc-200 active:scale-[0.99]"
            >
              Add Note
            </button>
          </form>
        </section>

        {/* RIGHT SIDE */}
        <section className="p-8 md:p-12 lg:p-16">
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">Recent Notes</h1>

          {/* NOTES CONTAINER */}
          <div className="flex flex-wrap gap-8">
            {/* NOTE */}
            {/* <div
              className="
                flex min-h-[300px] w-[230px] flex-col
                rounded-xl bg-cover bg-center bg-no-repeat
                p-6 pt-12 text-black
                shadow-lg
              "
              style={{
                backgroundImage: "url('/notebook-page.png')",
              }}
            >
              <h2 className="text-2xl font-bold text-zinc-600 ">React Video</h2>

              <p className="mt-4 text-base text-zinc-600">
                Mere pyare bhaiyo ke liye
              </p>

              <button
                className="
                  mt-auto w-full rounded-md
                  bg-red-500 py-2
                  font-semibold text-white
                  transition hover:bg-red-600
                "
              >
                Delete
              </button>
            </div> */}

            {task.map((e, idx) => {
              return (
                <div
                  className="
                flex min-h-[300px] w-[230px] flex-col
                rounded-xl bg-cover bg-center bg-no-repeat
                p-6 pt-12 text-black
                shadow-lg
              "
                  style={{
                    backgroundImage:
                      "url('https://png.pngtree.com/png-clipart/20231007/original/pngtree-yellow-notepad-ruled-picture-image_13101169.png')",
                  }}
                >
                  <h2 className="text-2xl font-bold text-zinc-600 ">
                    {e.title}
                  </h2>

                  <p className="mt-4 text-base text-zinc-600">{e.content}</p>

                  <button
                    className="
                  mt-auto w-full rounded-md
                  bg-red-500 py-2
                  font-semibold text-white
                  transition hover:bg-red-600
                "
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
