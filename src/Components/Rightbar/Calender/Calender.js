import React from 'react'
import "./Calender.css"
import Cal from './Cal/Cal'

const Calender = () => {
    return (
        <div className='calender'>
            
            <p className='text_rightbar'>upcomming classes </p>
            <Cal/>
        </div>
    )
}

export default Calender;