import { useState } from "react";

function App() {
  // const [isVisible, setIsVisible] = useState(true);
  // const [name, setName] = useState("John");
  // const [character, setCharacter] = useState(0);
  // const [skills, setSkills] = useState(["HTML", "CSS", "NODE", "REACT"]);
  // const [user, setUser] = useState({
  //   name: "John",
  //   age: 20,
  //   city: "Kolkata",
  // });

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  // const [input, setInput] = useState("");

  // function increase() {
  //   setCounter(counter + 1);
  // }
  // function decrease() {
  //   setCounter(counter - 1);
  // }
  // function step5() {
  //   setCounter(counter + 5);
  // }
  // function dec5() {
  //   setCounter(counter - 5);
  // }

  // function visibility() {
  //   const text = document.querySelector("h1");
  //   if (text.style.display === "none") {
  //     text.style.display = "block";
  //     setIsVisible((prev) => !prev);
  //   } else {
  //     text.style.display = "none";
  //     setIsVisible((prev) => !prev);
  //   }
  // }

  // function nameChange() {
  //   setName((name) => (name == "Shouvik" ? "John" : "Shouvik"));
  // }
  // function lengthvalue(elem) {
  //   setCharacter(elem.target.value.length);
  // }

  // function addSkills() {
  //   setSkills([...skills, "react"]);
  // }
  // function addSkills() {
  //   const a = document.getElementById("x");

  //   setSkills([...skills, input]);
  // }

  // function deleteData(idx) {
  //   let a = skills.filter((e) => skills.indexOf(e) !== idx);

  //   setSkills(a);
  // }

  // function changeAge() {
  //   setUser((prev) => ({ ...prev, age: prev.age + 1 }));

  //   console.log(user);
  // }
  function addValue() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    setUser((prev) => ({
      ...prev,
      name: name.value,
      email: email.value,
    }));
  }

  // return (
  //   <>
  //     <div className="counter-container">
  //       <div className="counter-card">
  //         <h1 className="box">{name}</h1>

  //         <div className="buttons">
  //           {/* <button onClick={dec5} className="decrease">
  //             Decrease
  //           </button>
  //           <button onClick={step5} className="increase">
  //             Increase
  //           </button> */}
  //           {/* <button onClick={visibility} className="increase">
  //             {isVisible ? <span>hide</span> : <span>show</span>}
  //           </button> */}

  //           <button onClick={nameChange} className="increase">
  //             change
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     {skills.map((e, idx) => {
  //       return <h1 key={idx}>{e}</h1>;
  //     })}
  //     <input
  //       type="text"
  //       name=""
  //       id="x"
  //       onChange={(e) => {
  //         setInput(e.target.value);
  //       }}
  //     />

  //     <button onClick={addSkills}>add</button>
  //   </>
  // );

  // return (
  //   <>
  //     <div>
  //       {skills.map((e, idx) => {
  //         return (
  //           <h1 key={idx}>
  //             {e}
  //             <button
  //               onClick={function () {
  //                 deleteData(idx);
  //               }}
  //             >
  //               del
  //             </button>
  //           </h1>
  //         );
  //       })}
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     <h1>{user.name}</h1>
  //     <h1>{user.age}</h1>
  //     <h1>{user.city}</h1>

  //     <button onClick={changeAge}>change</button>
  //   </>
  // );

  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <input type="text" id="name" />
      <input type="text" id="email" />
      <button onClick={addValue}>add</button>
    </>
  );
}
export default App;
