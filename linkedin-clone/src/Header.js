import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
// import CommentIcon from "@mui/icons-material/Comment";
import { Message } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { Avatar } from "@mui/material";

import { useDispatch } from "react-redux";

import { auth } from "./firebaseSetup.js";
import { logout } from "./features/userSlice";

function Header() {
 
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="h-left">
        <img src="https://img.icons8.com/color/48/undefined/linkedin.png" />

        <form className="h-search">
          {/* search icn */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="h-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={Message} title="Message" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar onClick={logOutOfApp} title="Me" />
      </div>
    </div>
  );
}

export default Header;
