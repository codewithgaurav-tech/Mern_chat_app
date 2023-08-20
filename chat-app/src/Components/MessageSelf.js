import React from 'react'
import "./myStyle.css"

const MessageSelf = () => {
    const props2={name:"you",message:"sample message"}
    return <div className="self-message-conatiner"> 
    <div className='messageBox'>
        <p>{props2.message}</p>
        <p className='self-timeStamp'>4:26pm</p>
    </div>
     </div>
}
export default MessageSelf;