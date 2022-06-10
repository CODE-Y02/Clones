import { Avatar } from "@mui/material";
import React from "react";
import sidebarBg from "./assets/sidebarBg.jpg";
import "./Sidebar.css";

function Sidebar() {
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
        <Avatar className="sidebar_avatar" sx={{ width: 56, height: 56 }} />
        <h2>User Name</h2>
        <h4>user@email.xyz</h4>
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
