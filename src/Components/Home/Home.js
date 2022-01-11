import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import Center from '../Center/Center'
import "./Home.css"
import Rightbar from '../Rightbar/Rightbar'

const Home = () => {
    return (
        <div className='home'>
            <div className="left">
                <SideBar />
            </div>
            <div className="right">
                <div className="navbar_home">
                    <Navbar/>
                </div>
                
                <div className="main">
                
                    <div className="center">
                        <Center />
                    </div>
                    <div className="rightbar">
                        <Rightbar/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
