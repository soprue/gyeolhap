import React from "react";
import { isMobile } from "react-device-detect";

import Circle from "./Figures/Circle";
import Square from "./Figures/Square";
import Triangle from "./Figures/Triangle";

function Rule() {
    let size = isMobile ? 30 : 50;

    return (
        <div className="absolute inset-0 z-10 h-full w-full overflow-y-scroll break-keep rounded-3xl bg-white py-7 px-7	text-left text-sm dark:bg-dark-white sm:py-10 sm:text-base">
            '결! 합! 게임'은 9장의 그림 중에서{" "}
            <span className="font-bold">합</span>을 최대한 찾아내는 게임입니다.
            <hr className="my-8 text-[#eeeeee] dark:text-[#aaaaaa] sm:my-10" />
            게임에 사용되는 그림은 <span className="font-bold">3가지</span>{" "}
            속성을 가지고 있습니다.
            <div className="mt-5 flex w-full items-center justify-center">
                <p className="mr-5 w-12 font-bold">모양</p>
                <Square size={size} />
                <Circle size={size} />
                <Triangle size={size} />
            </div>
            <div className="flex w-full items-center justify-center">
                <p className="mr-5 w-12 font-bold">색</p>
                <Circle size={size} color="yellow" />
                <Circle size={size} color="green" />
                <Circle size={size} color="blue" />
            </div>
            <div className="mb-5 flex w-full items-center justify-center">
                <p className="mr-5 w-12 font-bold">배경색</p>
                <Circle size={size} bgColor="white" />
                <Circle size={size} bgColor="black" />
                <Circle size={size} bgColor="gray" />
            </div>
            <hr className="my-8 text-[#eeeeee] dark:text-[#aaaaaa] sm:my-10" />
            <span className="font-bold">합</span>은{" "}
            <span className="font-bold">3가지 속성</span>이{" "}
            <span className="font-bold">모두 같거나 모두 다른</span> 세 그림을
            말합니다.
            <br />
            <br />
            <br />
            다음은 이해를 돕기 위한 예시입니다.
            <div className="mt-8 mb-5 flex w-full items-center justify-center">
                <Triangle size={size} color="yellow" bgColor="black" />
                <Triangle size={size} color="green" bgColor="black" />
                <Triangle size={size} color="blue" bgColor="black" />
            </div>
            위의 세 그림은 모양이 <span className="font-bold">모두 같고</span>,
            색이 <span className="font-bold">모두 다르며</span>, 배경색이{" "}
            <span className="font-bold">모두 같으므로 </span>
            합입니다.
            <div className="mt-8 mb-5 flex w-full items-center justify-center">
                <Triangle size={size} color="yellow" bgColor="black" />
                <Square size={size} color="green" bgColor="black" />
                <Square size={size} color="blue" bgColor="black" />
            </div>
            위의 세 그림은 색이 <span className="font-bold">모두 다르며</span>,
            배경색이 <span className="font-bold">모두 같지만</span>, 모양이 모두
            같거나 모두 달라야 한다는{" "}
            <span className="underline underline-offset-2">
                조건을 충족하지 못하기 때문에
            </span>{" "}
            합이 아닙니다.
            <hr className="my-8 text-[#eeeeee] dark:text-[#aaaaaa] sm:my-10" />
            주어진 모양에서 합을 모두 찾은 경우에는{" "}
            <span className="font-bold">결</span>을 눌러서 다음으로 넘어갈 수
            있습니다.
            <br />
            <br />
            사용자는 <span className="font-bold">20초</span> 내에 합이나 결을
            찾아야 하며, 주어진 시간 안에 수행하지 못하면 게임은 종료됩니다.
            <br />
            <br />
            하나의 합을 찾을 때마다 <span className="font-bold">1점</span>을
            획득할 수 있고, 결인 상황에서 결을 누르면{" "}
            <span className="font-bold">3점</span>을 획득할 수 있습니다.
            <br />
            <br />
            단, 아래의 경우에는 <span className="font-bold">1점</span>을
            잃습니다.
            <br />
            <ul className="list-disc px-8 pt-5 pb-0">
                <li>합이 아닌 조합을 선택한 경우</li>
                <li>이미 선택했던 합을 중복 선택한 경우</li>
                <li>합이 남아 있는데 결을 누른 경우</li>
            </ul>
        </div>
    );
}

export default React.memo(Rule);
