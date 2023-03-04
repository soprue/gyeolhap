import React, { useEffect } from 'react'
import useDidMountEffect from '../../hooks/useDidMountEffect';

function Modal({ score, over, setOver }) {
  useDidMountEffect(() => {
    if(over) document.querySelector("#modal").style.display = "block"
    else document.querySelector("#modal").style.display = "none"
  }, [over]);

  return (
    <div id="modal" className="hidden fixed inset-0 z-10 w-full h-full bg-black/[.4]">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-96 rounded-3xl py-10 px-5 m-auto shadow-md text-center bg-white dark:bg-dark-white">
            <h1 className="mb-2.5 text-3xl font-bold">게임 종료</h1>

            <p className="text-lg">점수: <span className="font-bold">{score}</span></p>

            <button
              className="block w-full text-center p-2 mt-10 mb-0 mx-auto border rounded-full border-solid border-[#e2e8f0] bg-white transition-all	active:scale-[0.97]	shadow-inner-small"
              onClick={() => setOver(!over)}
            >
              다시 하기
            </button>
        </div>
    </div>
  )
}

export default Modal