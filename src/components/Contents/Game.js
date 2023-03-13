import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import useDidMountEffect from "../../hooks/useDidMountEffect";
import getRandom from "../../utils/getRandom";
import getHap from "../../utils/getHap";

import Circle from "../Figures/Circle";
import Square from "../Figures/Square";
import Triangle from "../Figures/Triangle";
import Modal from "../Modals/Modal";

import { TIMER } from "../../constants/timer";

function Game() {
    let [score, setScore] = useState(0);
    let [over, setOver] = useState(false);

    const interval = useRef();
    const [time, setTime] = useState(TIMER.FULL_TIME);

    let board = useRef(getRandom());
    let [hap, setHap] = useState([]);
    let [selected, setSelected] = useState([]);
    let [foundHap, setFoundHap] = useState([]);

    // 게임 시작 시 주어진 보드에서 합인 조합 찾기
    useEffect(() => {
        setHap(getHap(board.current));
    }, []);

    // 타이머
    useEffect(() => {
        let w = (time / TIMER.FULL_TIME) * 100;
        document.querySelector("#bar").style.width = w + "%";

        if (time <= 0) {
            clearInterval(interval.current);
            setOver(true);
        }
        if (time === TIMER.WARNING) {
            document.querySelector("#bar").style.backgroundColor = "#d0863a";
        }
        if (time === TIMER.ALMOST) {
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

        interval.current = setInterval(function () {
            setTime((prev) => prev - 1);
        }, 1000);
    };

    useEffect(() => {
        setTimer();
    }, [score]);

    // 게임 오버 시
    useDidMountEffect(() => {
        if (!over) {
            board.current = getRandom();
            setHap(getHap(board.current));
            setFoundHap([]);
            setSelected([]);
            setScore(0);
            setTimer();
        }
    }, [over]);

    // 선택한 조합이 합 맞는지 확인
    useEffect(() => {
        if (selected.length === 3) {
            let flag = false;
            selected.sort((a, b) => a - b);

            for (let element of hap) {
                if (JSON.stringify(element) === JSON.stringify(selected)) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                setScore((prev) => prev + 1);
                setFoundHap((prev) => [...prev, selected]);
                setHap((prev) =>
                    prev.filter(
                        (hap) =>
                            JSON.stringify(hap) !== JSON.stringify(selected)
                    )
                );

                toast("합입니다. 1점을 얻었습니다.", {
                    duration: 1000,
                    icon: "⭕",
                });
            } else {
                setScore((prev) => prev - 1);
                toast("합이 아닙니다. 1점을 잃었습니다.", {
                    duration: 1000,
                    icon: "❌",
                });
            }

            setSelected([]);
            let figures = document.querySelectorAll(".figure");
            figures.forEach(function (figure) {
                figure.classList.remove("selected");
            });

            setTimer();
        }
    }, [selected]);

    const handleHapButtonClick = (e) => {
        let current = e.currentTarget;
        let currentNum = Number(current.getAttribute("data-index"));

        if (current.classList.contains("selected")) {
            setSelected((prev) => prev.filter((num) => num !== currentNum));
        } else {
            setSelected((prev) => [...prev, currentNum]);
        }
        current.classList.toggle("selected");
    };

    // 결 버튼 클릭 시 결인지 판단
    const handleGyeolButtonClick = (e) => {
        if (hap.length === 0) {
            setScore((prev) => prev + 3);
            toast("결입니다. 3점을 얻었습니다.", {
                duration: 1000,
                icon: "⭕",
            });

            board.current = getRandom();
            setHap(getHap(board.current));
            setFoundHap([]);
        } else {
            setScore((prev) => prev - 1);
            toast("결이 아닙니다. 1점을 잃었습니다.", {
                duration: 1000,
                icon: "❌",
            });
        }

        setTimer();
    };

    return (
        <div className="absolute inset-0 z-10 h-full w-full break-keep bg-white py-5 px-5 text-left dark:bg-dark-white">
            <Modal score={score} over={over} setOver={setOver} />

            {/* 타이머 */}
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-dark-white dark:bg-white sm:h-4">
                <div className="absolute inset-0 bg-[#28c684]" id="bar"></div>
            </div>

            {/* 도형 */}
            <div className="my-5 grid grid-cols-3 grid-rows-3">
                {board.current.map((ele, idx) => {
                    let shape =
                        ele[0] === "0"
                            ? "square"
                            : ele[0] === "1"
                            ? "circle"
                            : "triangle";
                    let color =
                        ele[1] === "0"
                            ? "yellow"
                            : ele[1] === "1"
                            ? "green"
                            : "blue";
                    let bgColor =
                        ele[2] === "0"
                            ? "white"
                            : ele[2] === "1"
                            ? "black"
                            : "gray";

                    if (shape === "square") {
                        return (
                            <Square
                                color={color}
                                bgColor={bgColor}
                                index={idx + 1}
                                key={ele}
                                onClick={handleHapButtonClick}
                            />
                        );
                    } else if (shape === "circle") {
                        return (
                            <Circle
                                color={color}
                                bgColor={bgColor}
                                index={idx + 1}
                                key={ele}
                                onClick={handleHapButtonClick}
                            />
                        );
                    } else {
                        return (
                            <Triangle
                                color={color}
                                bgColor={bgColor}
                                index={idx + 1}
                                key={ele}
                                onClick={handleHapButtonClick}
                            />
                        );
                    }
                })}
            </div>

            {/* 찾은 합 목록 */}
            <div className="h-24">
                {foundHap.map((ele) => {
                    return (
                        <span className="mr-5" key={ele}>
                            {ele.join(" ")}
                        </span>
                    );
                })}
            </div>

            {/* 결 버튼 */}
            <button
                className="my-5 w-full rounded-full border border-solid border-[#e2e8f0] bg-white p-2 text-center shadow-inner-small	transition-all	active:scale-[0.97]"
                onClick={handleGyeolButtonClick}
            >
                결
            </button>

            {/* 점수 */}
            <div className="text-center text-3xl font-bold">{score}</div>
        </div>
    );
}

export default React.memo(Game);
