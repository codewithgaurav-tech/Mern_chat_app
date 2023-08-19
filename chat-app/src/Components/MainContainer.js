import React from 'react'
import "./myStyle.css"
import Sidebar from './Sidebar';
import WorkArea from './WorkArea';

const MainConatiner = () => {
    return (
        <div className="main-container">
            <Sidebar />
            <WorkArea />
        </div>
    )
}
export default MainConatiner;