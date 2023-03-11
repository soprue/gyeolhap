import React from "react";

function Start({ play, setPlay }) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <img src="images/logo-512.png" alt="logo" className="w-1/3" />

            <button
                className="inline-block rounded-full bg-black py-3 px-7 text-base font-medium text-white shadow-md	dark:text-dark-white sm:py-4 sm:px-10 sm:text-lg"
                onClick={() => setPlay(!play)}
            >
                시작하기
            </button>
        </div>
    );
}

export default React.memo(Start);
