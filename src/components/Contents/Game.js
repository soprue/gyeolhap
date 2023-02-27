import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast';

import useDidMountEffect from '../../hooks/useDidMountEffect';
import Circle from '../Figures/Circle';
import Square from '../Figures/Square';
import Triangle from '../Figures/Triangle';
import getRandom from '../../utils/getRandom';
import getHap from '../../utils/getHap';

import { TIMER } from '../../constants/timer';

function Game() {
  let [score, setScore] = useState(0);
  let [over, setOver] = useState(false);

  const interval = useRef();
  const [time, setTime] = useState(TIMER.FULL_TIME);

  let board = useRef(getRandom());
  let [hap, setHap] = useState([]);
  let [selected, setSelected] = useState([]);
  let [foundHap, setFoundHap] = useState([]);

  // 
  useEffect(() => {
    setHap(getHap(board.current));
  }, []);

  useEffect(() => {
    let w = (time / TIMER.FULL_TIME) * 100;
    document.querySelector("#bar").style.width = w + "%";

    if (!time) {
      clearInterval(interval.current);
      setOver(true);
    } 
    if(time === TIMER.WARNING) {
      document.querySelector("#bar").style.backgroundColor = "#d0863a";
    }
    if(time === TIMER.WARNING) {
      document.querySelector("#bar").style.backgroundColor = "#d03a49";
    }
  }, [time]);

  const setTimer = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;

      setTime(TIMER.FULL_TIME);
      document.querySelector("#bar").style.backgroundColor = "#28c684";
    }

    setTimeout(() => {
      interval.current = setInterval(function() {
        setTime(prev => prev - 1);
      }, 1000);
    }, 1000);
  }

  useEffect(() => {
    setTimer();
  }, [score]);

  useDidMountEffect(() => {
    // console.log(1)
  }, [over]);

  useEffect(() => {
    if(selected.length === 3) {
      let flag = false;
      selected.sort((a, b) => a - b);

      for(let element of hap) {
        if(JSON.stringify(element) === JSON.stringify(selected)) {
          flag = true;
          break;
        }
      }

      if(flag) {
        setScore(prev => prev + 1);
        setFoundHap(prev => [...prev, selected]);
        setHap(prev => prev.filter(hap => JSON.stringify(hap) !== JSON.stringify(selected)));

        toast("합입니다. 1점을 얻었습니다.", {
          duration: 1000,
          icon: "⭕",
        });
      } else {
        setScore(prev => prev - 1);
        toast("합이 아닙니다. 1점을 잃었습니다.", {
          duration: 1000,
          icon: "❌",
        });
      }
      
      setSelected([]);
      let figures = document.querySelectorAll(".figure");
      figures.forEach(function(figure) {
        figure.classList.remove("selected");
      });

      setTimer();
    }
  }, [selected]);

  const handleHapButtonClick = (e) => {
    let current = e.currentTarget;
    let currentNum = Number(current.getAttribute("data-index"));

    if(current.classList.contains("selected")) {
      setSelected(prev => prev.filter(num => num !== currentNum));
    } else {
      setSelected(prev => [...prev, currentNum]);
    }
    current.classList.toggle("selected");
  }

  const handleGyeolButtonClick = (e) => {
    if(hap.length === 0) {
      setScore(prev => prev + 3);
      toast("결입니다. 3점을 얻었습니다.", {
        duration: 1000,
        icon: "⭕",
      });

      board.current = getRandom();
      setHap(getHap(board.current));
      setFoundHap([]);
    } else {
      setScore(prev => prev - 1);
      toast("결이 아닙니다. 1점을 잃었습니다.", {
        duration: 1000,
        icon: "❌",
      });
    }

    setTimer();
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
            return <Square color={color} bgColor={bgColor} index={idx + 1} key={ele} onClick={handleHapButtonClick} />
          } else if(shape === "circle") {
            return <Circle color={color} bgColor={bgColor} index={idx + 1} key={ele} onClick={handleHapButtonClick} />
          } else {
            return <Triangle color={color} bgColor={bgColor} index={idx + 1} key={ele} onClick={handleHapButtonClick} />
          }
        })}
      </div>

      {/* 찾은 합 목록 */}
      <div className="h-32"> 
        {
          foundHap.map(ele => {
            return <span className="mr-5" key={ele}>{ele.join(" ")}</span>
          })
        }
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