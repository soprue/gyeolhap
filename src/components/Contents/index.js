import React, { useState } from 'react'
import Game from './Game';
import Start from './Start';

function Contents() {
    let [play, setPlay] = useState(false);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            {!play ? <Start play={play} setPlay={setPlay} /> : <Game />}
        </div>
    )
}

export default React.memo(Contents);