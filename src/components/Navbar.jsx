import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/">ALL</Link>
        <Link to="/fullstatck">FULL STACK DEVELOPMENT</Link>
        <Link to="/datascience">DATA SCIENCE</Link>
        <Link to="/cyber">CYBER SECURITY</Link>
        <Link to="/career">CAREER</Link>
      </div>
    </div>
  );
};

export default Navbar;
