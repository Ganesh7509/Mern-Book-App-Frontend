import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">BookStore</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Add Book</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

