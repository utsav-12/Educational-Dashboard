import React from 'react'
import Rightbar_card from './Rightbar_card'
import Calender from './Calender/Calender'
import "./Rightbar.css"

const Rightbar = (props) => {
    return (
        <div className='rightbar'>
            <div className="my_progress">
                <p className='text_rightbar'>my progress</p>
                <div className="rightbar_card_data">
                    <Rightbar_card name="Digital illustration"/>
                    <Rightbar_card name="Expressive portraits"/>
                    <Rightbar_card name="Isometric room"/>
                </div>
            </div>
            <Calender/>
        </div>
    )
}

export default Rightbar
