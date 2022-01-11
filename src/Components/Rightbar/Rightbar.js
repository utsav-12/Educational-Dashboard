import React from 'react'
import RightbarCard from './RightbarCard'
import Calender from './Calender/Calender'
import "./Rightbar.css"

const Rightbar = (props) => {
    return (
        <div className='rightbar'>
            <div className="my_progress">
                <p className='text_rightbar'>my progress</p>
                <div className="rightbar_card_data">
                    <RightbarCard name="Digital illustration" />
                    <RightbarCard name="Expressive portraits" />
                    <RightbarCard name="Isometric room" />
                </div>
            </div>
            <Calender />
        </div>
    )
}

export default Rightbar
