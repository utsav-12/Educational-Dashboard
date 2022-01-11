import React from 'react'
import "./Card.css"

const Card = ({ name = "Default", time, lessonCount, className = 'green' }) => {
    return (
        <div className='card'>
            <div className={`logo ${className}`}>
                <p>{name[0]}</p>

            </div>
            <div className="text_card">
                <h5>{name}</h5>
                <div className="text_card_bottom">
                    <p>{time}</p>
                    <span>&bull;</span>
                    <p>{lessonCount} lessons</p>
                </div>

            </div>
            <div className="right_arrow">
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    )
}

export default Card
