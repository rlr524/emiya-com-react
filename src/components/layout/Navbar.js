import React from "react";
import emiyaLogo from "./ec_new_logo_tags_small.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="logo-main">
        <img src={emiyaLogo} alt="" />
      </div>
      <p>
        <a href="/portfolio">Portfolio</a>
      </p>
      <p>
        <a href="/cv">C.V.</a>
      </p>
      <p>
        <a href="/services">Services</a>
      </p>
      <p>
        <a href="/blog">Blog</a>
      </p>
      <p>
        <a href="/contact">Contact</a>
      </p>
      <p>
        <a href="/client">Client Login</a>
      </p>
    </nav>
  );
};

export default Navbar;
