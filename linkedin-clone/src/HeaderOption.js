import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className={`headerOption ${avatar && "headerOption_avatar_wrap"}`}>
      {Icon && <Icon classname="headerOption_icon" />}
      {avatar && <Avatar className="headerOption__avatar" />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
