import React from 'react'
import "./SideBar.css"


const SideBar = () => {
    return (
        <div className='sidebar'>
            <h3>Classroom 402</h3>
            <div className='buttons'>
                <button className='btn active_sidebar'>
                    <span><i className="fas fa-home"></i></span>
                    home
                </button>
                <button className='btn'>
                    <span><i className="fas fa-envelope"></i></span>
                    Messages
                </button>
                <button className='btn'>
                    <span><i className="fas fa-book"></i></span>
                    My Classes
                </button>
                <button className='btn'>
                    <span><i className="fas fa-calendar-alt"></i></span>
                    Schedule
                </button>
                <button className='btn'>
                    <span><i className="fas fa-cog"></i></span>
                    Setting
                </button>
            </div>
            <div className="upgrade_plan">
                {/* <img src={image} alt="upgrade Plan" /> */}
                <div className="bottom_text">Upgrade<br /> Your Plan</div>
                <div className="bottom_arrow">
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar
