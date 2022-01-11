import React from 'react'
import "./Cal.css"

const Cal = () => {
    return (
        <div className='main1'>
            <section className="card__header">
                <h4>Today</h4>
                <h4>January 2022</h4>
             </section>
            <section className="card__body">
                <ul className="card__body__days">
                    <li>mo</li>
                    <li>tu</li>
                    <li>we</li>
                    <li>th</li>
                    <li>fr</li>
                    <li>sa</li>
                    <li>su</li>
                </ul>
                <ul className="card__body__dates">
                    <li>6</li>
                    <li className="active">7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </ul>
            </section>
            <hr/>
            <p className='time'>8:30Am</p>
            <p className='calender_text'>Digital Autoportrait</p>
            <p className='time'>10:00Am</p>
            <p className='calender_text'>Abstraction in one tone</p>
        </div>
    )
}

export default Cal
