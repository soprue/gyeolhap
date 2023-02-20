import React from 'react'

function Circle({size = 50, color, bgColor, index}) {
    let fillColor = color === "yellow" ? "#ffee58" : color === "green" ? "#66bb6a" : "#42a5f5";
    let backColor = bgColor === "gray" ? "#aaaaaa" : bgColor === "black" ? "#121212" : "#ffffff"
    let radius = size / 2;

    return (
        <button className="p-5 m-1 shadow-inner float-left" style={{ backgroundColor: backColor }} data-type={index}>
            <svg width={size} height={size} className="my-0 mx-auto">
                <circle cx={radius} cy={radius} r={radius} fill={fillColor} />
            </svg>
        </button>
    )
}

export default Circle