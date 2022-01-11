import React from 'react'
import "./RightbarCard.css"

const RightbarCard = (props) => {
    return (
        <React.Fragment>
            <div className="card_rightbar">
                <div className="img">
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className="text_card">
                    <h5>{props.name}</h5>
                    <div className="text_card_bottom">
                        <div id="myProgress">
                            <div id="myBar"></div>
                        </div>
                    </div>
                </div>
                <div className="right_arrow">
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RightbarCard
