import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="dashboard">Dashboard</Link>
    </header>
  );
};

export default Header;
