import React, { useState } from "react";
import "./myStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItems from "./ConversationsItems";

const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Gaurav Lalwani",
      lastMessage: "Message",
      timeStamp: "today",
    },
    {
      name: "test1 ",
      lastMessage: "Demo message",
      timeStamp: "today",
    },
  ]);
  console.log(conversations);
  return (
    <>
      <div className="sidebar-conatiner">
        <div className="sb-header">
          <div className="profile">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>

          <div>
            <IconButton>
              <PersonAddIcon />
            </IconButton>
            <IconButton>
              <GroupAddIcon />
            </IconButton>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
            <IconButton>
              <NightlightIcon />
            </IconButton>
          </div>
        </div>
        <div className="sb-search">
          <SearchIcon />
          <input placeholder="search" className="search-box"></input>
        </div>
        <div className="sb-conversations">
          {conversations.map((conversations) => {
            return (
              <ConversationsItems props={conversations} key={conversations} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
