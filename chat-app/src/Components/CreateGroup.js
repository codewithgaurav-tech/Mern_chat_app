import React, { useState } from "react";
import "./myStyle.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBox";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from "@mui/material";

const CreateGroups = () => {
  return (
    <div className="createGroups-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
};
export default CreateGroups;
