import axios from "axios";

import { useEffect, useState } from "react";
function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  async function getData() {
    console.log("Data aa gaya...");
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setUserData(data);
  }

  // useEffect(getData);
  useEffect(
    function () {
      getData();
    },
    [index],
  );
  let printUserData = <h3>No User available</h3>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <>
      <div className="bg-black overflow-auto h-screen 4 text-white">
        {/* <button
          onClick={getData}
          className="bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white"
        >
          get data
        </button> */}

        <div className="flex flex-wrap gap-4">{printUserData}</div>
        <div className="flex justify-center gap-6 items-center p-4">
          <button
            onClick={() => {
              setIndex((index) => (index > 0 ? index - 1 : index));
              console.log("prev", index);
            }}
            className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded py-2 px-4"
          >
            prev
          </button>
          <button
            onClick={() => {
              console.log("next", index);
              setIndex(index + 1);
            }}
            className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded py-2 px-4"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
