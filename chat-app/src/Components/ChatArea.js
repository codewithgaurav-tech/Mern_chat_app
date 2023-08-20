import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import "./myStyle.css";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
const ChatArea = ({ props }) => {
  return (
    <div className="charArea-container">
      <div className="charArea-header">
        <p className="con-icon">{props?.name[0]}</p>
        <div className="header-text">
          {" "}
          <p className="con-title">{props?.name}</p>
          <p className="con-timeStamp">{props?.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="message-container">
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a Message" className="search-box"></input>
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
