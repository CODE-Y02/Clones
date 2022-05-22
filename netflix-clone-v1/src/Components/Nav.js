import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import avatar from "../Assets/avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt="Netflix logo" className="nav_logo" />
      <img src={avatar} alt="Netflix Avatar" className="nav_avatar" />
    </div>
  );
}

export default Nav;
