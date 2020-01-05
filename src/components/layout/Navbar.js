import React from "react";
import emiyaLogo from "./ec_new_logo_tags_small.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="logo-main">
        <img src={emiyaLogo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
