import React, { useEffect, useState } from 'react'
import useDidMountEffect from '../../hooks/useDidMountEffect';
import Circle from '../Figures/Circle';
import Square from '../Figures/Square';
import Triangle from '../Figures/Triangle';

function Game() {
  let [score, setScore] = useState(0);
  let [over, setOver] = useState(false);

  const setTimer = () => {
    const fullTime = 20;
    const warn = 10;
    const almost = 5;

    let currTime = fullTime;

    const timer = setInterval(function() {
      --currTime;

      let w = (currTime / fullTime) * 100;
      document.querySelector("#bar").style.width = w + "%";

      if (!currTime) {
        window.clearInterval(timer);
        setOver(true);
      } 
      if(currTime === warn) {
        document.querySelector("#bar").style.backgroundColor = "#d0863a";
      }
      if(currTime === almost) {
        document.querySelector("#bar").style.backgroundColor = "#d03a49";
      }
    }, 1000);
  }

  useEffect(() => {
    setTimer()
  }, [score]);

  useDidMountEffect(() => {
    console.log(1)
  }, [over]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full py-5 px-5 text-left break-keep bg-white dark:bg-dark-white">
      <div className="relative w-full h-5 rounded-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[#28c684]" id="bar"></div>
      </div>

      <div className="">
        
      </div>

      <div className="">
      </div>
    </div>
  )
}

export default React.memo(Game)