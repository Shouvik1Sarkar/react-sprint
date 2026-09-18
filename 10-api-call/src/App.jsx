import { useState } from "react";
import axios from "axios";

function App() {
  let [mydata, setMydata] = useState([]);
  async function apiData() {
    // const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    // const getdata = await data.json();
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );

    // setMydata(getdata);
    setMydata(data);
    console.log(data);
    // setMydata(getdata);
  }
  return (
    <>
      <div className="box">
        <div className="flex justify-center py-8">
          <button
            onClick={apiData}
            className="rounded-lg bg-white px-8 py-3 font-semibold text-black shadow-md transition-all duration-200 hover:bg-zinc-200 hover:shadow-lg active:scale-95"
          >
            Load Todos
          </button>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-3 p-8">
          {mydata.map((e) => {
            return (
              <div
                key={e.id}
                className="flex w-full items-center justify-between gap-6 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-md transition hover:border-zinc-700 hover:bg-zinc-800"
              >
                {/* TITLE */}
                <div className="flex items-center gap-4">
                  <div
                    className={`h-3 w-3 shrink-0 rounded-full ${
                      e.completed ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  ></div>

                  <span
                    className={`text-base font-medium ${
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
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
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
    </>
  );
}
export default App;
