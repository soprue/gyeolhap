import React from "react";

function Triangle({ size = 50, color, bgColor, index, onClick }) {
    let fillColor =
        color === "yellow"
            ? "#ffee58"
            : color === "green"
            ? "#66bb6a"
            : "#42a5f5";
    let backColor =
        bgColor === "gray"
            ? "#C5C5C5"
            : bgColor === "black"
            ? "#121212"
            : "#ffffff";
    let point = `${size / 2},0 0,${size} ${size},${size}`;

    return (
        <button
            className="figure float-left m-1 p-4 shadow-inner sm:p-5"
            style={{ backgroundColor: backColor }}
            data-index={index}
            onClick={onClick}
        >
            <svg
                viewBox={`0 0 ${size} ${size}`}
                width={size}
                height={size}
                className="my-0 mx-auto"
            >
                <polygon points={point} fill={fillColor} />
            </svg>
        </button>
    );
}

export default Triangle;
