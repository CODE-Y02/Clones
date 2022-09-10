import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* post boddy */}
      <div className="post_body">
        <p>{message}</p>
      </div>

      {/* buttons */}
      <div className="post_buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
