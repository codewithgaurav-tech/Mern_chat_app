import React, { useState } from 'react'
import "./myStyle.css"
import Sidebar from './Sidebar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroup';

const MainConatiner = () => {
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
    return (
        <div className="main-container">
            <Sidebar />
            {/* <ChatArea props={conversations[0]}/> */}
            <Welcome />
            {/* <CreateGroups /> */}
        </div>
    )
}
export default MainConatiner;