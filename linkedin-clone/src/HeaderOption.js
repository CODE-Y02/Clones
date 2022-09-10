import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const { user } = useSelector(selectUser);
  // console.log(user.photoUrl);
  const newLocal = "headerOption__avatar";
  return (
    <div
      onClick={onClick}
      className={`headerOption ${avatar && "headerOption_avatar_wrap"}`}
    >
      {Icon && <Icon classname="headerOption_icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className={newLocal}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
