import React, { useState } from "react";
import Game from "./Game";
import Start from "./Start";

function Contents() {
    let [play, setPlay] = useState(false);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            {!play ? <Start play={play} setPlay={setPlay} /> : <Game />}
        </div>
    );
}

export default React.memo(Contents);
