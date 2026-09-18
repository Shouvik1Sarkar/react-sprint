function App() {
  // localStorage.setItem("age", 75);
  // const user = localStorage.getItem("user");
  // localStorage.removeItem("age");
  // localStorage.clear();
  const user = { name: "Shouvik", age: 89 };
  localStorage.setItem("user", JSON.stringify(user));
  const getUser = JSON.parse(localStorage.getItem("user"));
  console.log(getUser);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
