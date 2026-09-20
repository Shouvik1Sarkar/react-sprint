import { Route, Routes } from "react-router";
import HomePage from "./page/HomePage.jsx";
import AboutPage from "./page/About.jsx";
import ContactPage from "./page/Contact.jsx";
import Nav from "./components/Nav.jsx";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
