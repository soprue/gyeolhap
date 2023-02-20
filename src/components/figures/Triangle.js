import React from 'react'

function Triangle({size = 50, color, bgColor, index, onClick}) {
    let fillColor = color === "yellow" ? "#ffee58" : color === "green" ? "#66bb6a" : "#42a5f5";
    let backColor = bgColor === "gray" ? "#aaaaaa" : bgColor === "black" ? "#121212" : "#ffffff"
    let point = `${size / 2},0 0,${size} ${size},${size}`;

    return (
        <button className="p-5 m-1 shadow-inner float-left" style={{ backgroundColor: backColor }} data-index={index} onClick={onClick}>
            <svg width={size} height={size} className="my-0 mx-auto">
                <polygon points={point} fill={fillColor} />
            </svg>
        </button>
    )
}

export default Triangle