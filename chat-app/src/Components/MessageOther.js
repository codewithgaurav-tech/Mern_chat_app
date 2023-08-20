import React from "react";
import "./myStyle.css";

const MessageOther = () => {
  var props1 = { name: "Gaurav Lalwani", message: "dummy message" };
  var props1 = { name: "User", message: "Dummy message 2" };
  return (
    <div className="other-message-conatiner">
      <div className="conversation-container">
        <p className="con-icon">{props1?.name[0]}</p>
        <div className="other-text-content">
            <p className="con-title">{props1?.name} </p>
          <p className="con-lastMessage">{props1?.message}</p>
          <p className="self-timeStamp">4:26pm</p>
        </div>
      </div>
    </div>
  );
};
export default MessageOther;
