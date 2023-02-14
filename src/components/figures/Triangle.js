import React from 'react'

function Triangle({size = 50, color, bgColor = "white"}) {
    let fillColor = color === "yellow" ? "#ffee58" : color === "green" ? "#66bb6a" : "#42a5f5";
    let backColor = bgColor === "white" ? "#ffffff" : bgColor === "black" ? "#121212" : "#aaaaaa"
    let point = `${size / 2},0 0,${size} ${size},${size}`;

    return (
        <div className="p-5 m-1 shadow-inner" style={{ backgroundColor: backColor }}>
            <svg width={size} height={size}>
                <polygon points={point} fill={fillColor} />
            </svg>
        </div>
    )
}

export default Triangle