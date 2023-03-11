import React, { useEffect } from "react";

function Modal({ score, over, setOver }) {
    useEffect(() => {
        if (over) document.querySelector("#modal").style.display = "block";
        else document.querySelector("#modal").style.display = "none";
    }, [over]);

    return (
        <div
            id="modal"
            className="fixed inset-0 z-10 hidden h-full w-full bg-black/[.6]"
        >
            <div className="absolute top-1/2 left-1/2 m-auto w-72 translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white py-8 px-5 text-center shadow-md dark:bg-dark-white sm:w-96 sm:py-10">
                <h1 className="mb-2.5 text-xl font-bold sm:text-3xl">
                    게임 종료
                </h1>

                <p className="text-sm sm:text-base">
                    점수: <span className="font-bold">{score}</span>
                </p>

                <button
                    className="mx-auto mt-8 mb-0 block w-full rounded-full border border-solid border-[#e2e8f0] bg-white p-2 text-center text-sm shadow-inner-small transition-all active:scale-[0.97]	sm:mt-10	sm:text-base"
                    onClick={() => setOver(false)}
                >
                    다시 하기
                </button>
            </div>
        </div>
    );
}

export default React.memo(Modal);
