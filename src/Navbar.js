import { NavLink } from "react-router-dom";

const navStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
const ulStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};
const liStyle = { listStyle: "none", padding: 5 };

const Navbar = () => {
  return (
    <nav className="navbar" style={navStyle}>
      <h1>ContrataMex</h1>
      <div className="links">
        <ul style={ulStyle}>
          <li style={liStyle}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li style={liStyle}>
            <NavLink to="/SignUp">SignUp</NavLink>
          </li>
          <li style={liStyle}>
            <NavLink to="/SignIn">SignIn</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
