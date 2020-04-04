import React from "react";
import emiyaLogo from "./img/ec_new_logo_tags_small.svg";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <nav className="navbar py-2">
        <div className="logo-main">
          <a href="/">
            <img className="logo-img" src={emiyaLogo} alt="" />
          </a>
        </div>
        <div className="nav-right">
          <p>
            <a href="/pricing">Pricing</a>
          </p>
          {/* <p>
          <a href="/blog">Blog</a>
        </p> */}
          <p>
            <a href="/contact">Contact</a>
          </p>
        </div>
        {/* <p>
          <a href="/client">Client Login</a>
        </p> */}
      </nav>
    </div>
  );
};

export default Navbar;
