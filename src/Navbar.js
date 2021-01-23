import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ContrataMex</h1>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
