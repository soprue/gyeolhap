import React from 'react'

function Circle({size = 50, color, bgColor = "white"}) {
    let fillColor = color === "yellow" ? "#ffee58" : color === "green" ? "#66bb6a" : "#42a5f5";
    let backColor = bgColor === "white" ? "#ffffff" : bgColor === "black" ? "#121212" : "#aaaaaa"
    let radius = size / 2;

    return (
        <div className="p-5 m-1 shadow-inner" style={{ backgroundColor: backColor }}>
            <svg width={size} height={size}>
                <circle cx={radius} cy={radius} r={radius} fill={fillColor} />
            </svg>
        </div>
    )
}

export default Circle