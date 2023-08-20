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
import CreateGroups from "./CreateGroup";

const Sidebar = () => {
  const [group_open ,setGroup_open]=useState(false)
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
 const handleAddGroupClick = () => {
  setGroup_open(!group_open)

 }
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
            <IconButton onClick={handleAddGroupClick}>
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
      {group_open && <CreateGroups />}
    </>
  );
};
export default Sidebar;
