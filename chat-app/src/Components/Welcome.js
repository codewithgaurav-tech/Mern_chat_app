import React, { useState } from 'react'
import "./myStyle.css"
import logo from '../live-chat.png'

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <img src={logo} alt={'Logo'} className='welcome-logo'/>
            <p>View and text directly to people present in the chat Rooms.</p>
        </div>
    )
}
export default Welcome;