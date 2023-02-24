import React, { useEffect, useRef, useState } from 'react'
import Circle from '../Figures/Circle';
import Square from '../Figures/Square';
import Triangle from '../Figures/Triangle';
import useDidMountEffect from '../../hooks/useDidMountEffect';
import getRandom from '../../utils/getRandom';
import getHap from '../../utils/getHap';
import { toast } from 'react-hot-toast';

function Game() {
  let [score, setScore] = useState(0);
  let [over, setOver] = useState(false);

  let board = useRef(getRandom());
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
    setHap(getHap(board.current));
  }, []);

  useEffect(() => {
    // setTimer()
  }, [score]);

  useDidMountEffect(() => {
    // console.log(1)
  }, [over]);

  const handleHapButtonClick = (e) => {
    let current = e.currentTarget;
    let currentNum = current.getAttribute("data-index");

    if(current.classList.contains("selected")) {
      setSelected(prev => prev.filter(num => num !== currentNum));
    } else {
      setSelected(prev => [...prev, currentNum]);
    }
    current.classList.toggle("selected");

    if(selected.length === 3) {

    }
  }

  const handleGyeolButtonClick = (e) => {
    if(hap.length === 0) {
      toast("결입니다. 3점을 얻었습니다.", {
        duration: 1000,
        icon: "⭕",
      });
    } else {
      setScore(prev => prev - 1);
      toast("결이 아닙니다. 1점을 잃었습니다.", {
        duration: 1000,
        icon: "❌",
      });
    }
  }

  return (
    <div className="absolute inset-0 z-10 w-full h-full py-5 px-5 text-left break-keep bg-white dark:bg-dark-white">
      {/* 타이머 */}
      <div className="relative w-full h-4 rounded-full overflow-hidden bg-dark-white dark:bg-black">
        <div className="absolute inset-0 bg-[#28c684]" id="bar"></div>
      </div>

      {/* 도형 */}
      <div className="grid grid-cols-3 grid-rows-3 my-5">
        {board.current.map((ele, idx) => {
          let shape = ele[0] === "0" ? "square" : ele[0] === "1" ? "circle" : "triangle";
          let color = ele[1] === "0" ? "yellow" : ele[1] === "1" ? "green" : "blue";
          let bgColor = ele[2] === "0" ? "white" : ele[2] === "1" ? "black" : "gray";

          if(shape === "square") {
            return <Square color={color} bgColor={bgColor} index={idx} key={ele} onClick={handleHapButtonClick} />
          } else if(shape === "circle") {
            return <Circle color={color} bgColor={bgColor} index={idx} key={ele} onClick={handleHapButtonClick} />
          } else {
            return <Triangle color={color} bgColor={bgColor} index={idx} key={ele} onClick={handleHapButtonClick} />
          }
        })}
      </div>

      {/* 찾은 합 목록 */}
      <div className="h-32"> 
        <span className="mr-5">1 2 3</span>
        <span className="mr-5">5 7 9</span>
      </div>
      
      {/* 결 버튼 */}
      <button
        className="w-full text-center p-2 my-5 border rounded-full border-solid border-[#e2e8f0] bg-white transition-all	active:scale-[0.97]	shadow-inner-small"
        onClick={handleGyeolButtonClick}
      >
        결
      </button>

      {/* 점수 */}
      <div className="text-center text-3xl font-bold">
        {score}
      </div>
    </div>
  )
}

export default React.memo(Game)