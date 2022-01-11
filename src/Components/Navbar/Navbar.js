import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="text">
                <h2>Welcome back, Alan!</h2>
            </div>
            <div className="icons">
                <span><i className="fas fa-search"></i></span>
                
                <i className="fas fa-user-circle"></i>
                <i className="fas fa-angle-down"></i>
            </div>
            
        </div>
    )
}

export default Navbar
