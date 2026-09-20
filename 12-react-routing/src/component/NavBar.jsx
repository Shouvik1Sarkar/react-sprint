import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <div className="nav">
        <h1>Navbar</h1>
        <div>
          {/* <a href="/">Home</a>
          <a href="/contact">contact</a>
          <a href="/about">about</a> */}

          <Link to="/">Home</Link>
          <Link to="/contact">contact</Link>
          <Link to="/about">about</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
