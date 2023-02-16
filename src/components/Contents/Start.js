import React from 'react'

function Start({play, setPlay}) {

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            
            <img
                src="images/logo-512.png" 
                alt="logo"
                className="w-1/3"
            />

            <button
                className="inline-block rounded-full py-4 px-10 shadow-md font-medium text-white dark:text-dark-white bg-black"
                onClick={() => (setPlay(!play))}
            >
                시작하기
            </button>

        </div>
    )
}

export default React.memo(Start);