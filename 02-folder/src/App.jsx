import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar />
      {Card()}
      {Card()}
    </>
  );
}

export default App;
