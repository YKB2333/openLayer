import React from 'react'

import "./timeSpaceSmallBox.scss"

export default function index(props) {
    const {title,childText,href} = props.timeSpace;
    const img = props.img;
    return (
        <div className="timeSpaceSmallBox">
            <div className="imgBox"><img src={img} /></div>
            <h2>{title}</h2>
            <p>                              
            {childText.p1}<br />
            {childText.p2} <br />                                                 
            {childText.p3}                          
            </p>
            <a href={href}>详情</a>
        </div>
    )
}
