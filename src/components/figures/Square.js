import React from 'react'

function Square({size = 50, color, bgColor = "white"}) {
    let fillColor = color === "yellow" ? "#ffee58" : color === "green" ? "#66bb6a" : "#42a5f5";
    let backColor = bgColor === "white" ? "#ffffff" : bgColor === "black" ? "#121212" : "#aaaaaa"

    return (
        <div className="p-5 m-1 shadow-inner float-left" style={{ backgroundColor: backColor }}>
            <svg width={size} height={size}>
                <rect width={size} height={size} fill={fillColor} />
            </svg>
        </div>
    )
}

export default Square