import React, { useEffect, useState } from 'react'
import Circle from '../Figures/Circle';
import Square from '../Figures/Square';
import Triangle from '../Figures/Triangle';
import useDidMountEffect from '../../hooks/useDidMountEffect';

function Game() {
  let [score, setScore] = useState(0);
  let [over, setOver] = useState(false);

  let [hap, setHap] = useState([]);
  let [selected, setSelected] = useState([]);

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
    // setTimer()
  }, [score]);

  useDidMountEffect(() => {
    console.log(1)
  }, [over]);

  const onClickHandler = (e) => {
    console.log(e.currentTarget.getAttribute("data-index"))
  }

  return (
    <div className="absolute inset-0 z-10 w-full h-full py-5 px-5 text-left break-keep bg-white dark:bg-dark-white">
      <div className="relative w-full h-4 rounded-full overflow-hidden bg-dark-white dark:bg-black">
        <div className="absolute inset-0 bg-[#28c684]" id="bar"></div>
      </div>

      {/* 도형 */}
      <div className="grid grid-cols-3 grid-rows-3 my-5">
        <Circle color="yellow"  bgColor="white" index="1" onClick={onClickHandler} />
        <Triangle color="green"  bgColor="black" index="2" onClick={onClickHandler} />
        <Circle color="blue"  bgColor="gray" index="3" onClick={onClickHandler} />
        <Triangle color="yellow"  bgColor="white" index="4" onClick={onClickHandler} />
        <Circle color="green"  bgColor="white" index="5" onClick={onClickHandler} />
        <Circle color="blue" bgColor="black" index="6" onClick={onClickHandler} />
        <Circle color="yellow"  bgColor="gray" index="7" onClick={onClickHandler} />
        <Square color="green"  bgColor="white" index="8" onClick={onClickHandler} />
        <Square color="blue"  bgColor="white" index="9" onClick={onClickHandler} />
      </div>

      {/* 합 */}
      <div className="h-32"> 
        <span className="mr-5">1 2 3</span>
        <span className="mr-5">5 7 9</span>
      </div>
      
      <button className="w-full text-center p-2 my-5 border rounded-full border-solid border-[#e2e8f0] bg-white transition-all	active:scale-[0.97]	shadow-inner-small">
        결
      </button>

      <div className="text-center text-3xl font-bold">
        -3
      </div>
    </div>
  )
}

export default React.memo(Game)