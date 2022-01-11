import React from 'react'
import './Center.css'
import Card from './Cards/Card'

const Center = (props) => {
    const defaultData = [
        { name: 'Drawing People: creation of uniquecharacter', time: "1h 40m", lessonCount: 15, className: 'white' },
        { name: 'Color theory of digital painting', time: "1h 40m", lessonCount: 15, className: "yellow" },
        { name: 'Hand lettering: fundamentals of touches', time: "1h 40m", lessonCount: 15, className: "green" },
        { name: 'Watercolortextures for graphic design', time: "1h 40m", lessonCount: 15, className: "red" }
    ]
    return (
        <div>
            <h3 className="text_center">Recommended</h3>
            <div>
                {defaultData.map((cardItem, index) => <Card {...cardItem} key={index} />)}

            </div>
        </div>
    )
}

export default Center
