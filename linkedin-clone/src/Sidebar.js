import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import sidebarBg from "./assets/sidebarBg.jpg";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useSelector(selectUser);
  // we are destructuring object user above so that we can use user.email instead user.user
  // console.log(user.user.displayName);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={sidebarBg} alt="" />
        <Avatar
          src={user?.photoUrl}
          // alt={user?.email[0]}
          className="sidebar_avatar"
          sx={{ width: 56, height: 56 }}
        >
          {user?.displayName[0]}
        </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNum">2,333</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNum">2,3773</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react Js")}
        {recentItem("react Jobs")}
        {recentItem("Javascript")}
        {recentItem("Next Js")}
      </div>
    </div>
  );
}

export default Sidebar;
