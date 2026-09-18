import axios from "axios";
import { useState } from "react";
function App() {
  const [getData, setGetData] = useState([]);
  async function fetchData() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
    // const data = await raw_data.json();
    setGetData(data);
    console.log(data);
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Todo List</h1>

            <p className="mt-2 text-zinc-400">Fetch and view your tasks</p>
          </div>

          <button
            onClick={fetchData}
            className="
            rounded-lg bg-white px-6 py-3
            font-semibold text-black
            transition-all duration-200
            hover:bg-zinc-200
            active:scale-95
          "
          >
            Fetch Todos
          </button>
        </div>

        {/* TODO LIST */}
        <div className="flex flex-col gap-3">
          {getData.map((e, idx) => {
            return (
              <div
                key={idx}
                className="
                flex items-center justify-between gap-5
                rounded-xl border border-zinc-800
                bg-zinc-900 px-6 py-5
                transition-all duration-200
                hover:border-zinc-700 hover:bg-zinc-800
              "
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  {/* STATUS DOT */}
                  <div
                    className={`h-3 w-3 shrink-0 rounded-full ${
                      e.completed ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  />

                  {/* TITLE */}
                  <span
                    className={`font-medium ${
                      e.completed
                        ? "text-zinc-500 line-through"
                        : "text-zinc-100"
                    }`}
                  >
                    {e.title}
                  </span>
                </div>

                {/* STATUS */}
                <span
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    e.completed
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {e.completed ? "Completed" : "Pending"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
