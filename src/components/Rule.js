import React from 'react'
import Circle from './figures/Circle';
import Square from './figures/Square';
import Triangle from './figures/Triangle';

function Rule() {
  return (
    <div className="w-full h-full text-left break-keep overflow-y-scroll py-10 px-7">
        '결! 합! 게임'은 9장의 그림 중에서 <span className="font-bold">합</span>을 최대한 찾아내는 게임입니다.
        
        <hr className="my-8 text-[#eeeeee] dark:text-[#aaaaaa]" />

        게임에 사용되는 그림은 <span className="font-bold">3가지</span> 속성을 가지고 있습니다.

        <div className="w-full flex justify-center items-center mt-5">
            <p className="w-12 mr-5 font-bold">모양</p>
            <Square />
            <Circle />
            <Triangle />
        </div>

        <div className="w-full flex justify-center items-center">
            <p className="w-12 mr-5 font-bold">색</p>
            <Circle color="yellow" />
            <Circle color="green" />
            <Circle color="blue" />
        </div>

        <div className="w-full flex justify-center items-center mb-5">
            <p className="w-12 mr-5 font-bold">배경색</p>
            <Circle bgColor="white" />
            <Circle bgColor="black" />
            <Circle bgColor="gray" />
        </div>
        
        <hr className="my-8 text-[#eeeeee] dark:text-[#aaaaaa]" />

        <span className="font-bold">합</span>은 <span className="font-bold">3가지 속성</span>이 <span className="font-bold">모두 같거나 모두 다른</span> 세 그림을 말합니다.
        <br /><br /><br />
        다음은 이해를 돕기 위한 예시입니다.

        <div className="w-full flex justify-center items-center mt-8 mb-5">
            <Triangle color="yellow" bgColor="black" />
            <Triangle color="green" bgColor="black" />
            <Triangle color="blue" bgColor="black" />
        </div>

        위의 세 그림은 모양이 <span className="font-bold">모두 같고</span>, 
        색이 <span className="font-bold">모두 다르며</span>,
        배경색이 <span className="font-bold">모두 같으므로 </span>
        합입니다.

        <div className="w-full flex justify-center items-center mt-8 mb-5">
            <Triangle color="yellow" bgColor="black" />
            <Square color="green" bgColor="black" />
            <Square color="blue" bgColor="black" />
        </div>
        
        위의 세 그림은 색이 <span className="font-bold">모두 다르며</span>, 
        배경색이 <span className="font-bold">모두 같지만</span>, 
        모양이 모두 같거나 모두 달라야 한다는 <span className="underline underline-offset-2">조건을 충족하지 못하기 때문에</span> 합이 아닙니다.
        
        <hr className="my-8 text-[#eeeeee] dark:text-[#aaaaaa]" />

        주어진 모양에서 합을 모두 찾은 경우에는 <span className="font-bold">결</span>을 눌러서 다음으로 넘어갈 수 있습니다.
        <br /><br />
        사용자는 <span className="font-bold">20초</span> 내에 합이나 결을 찾아야 하며, 주어진 시간 안에 수행하지 못하면 게임은 종료됩니다.
        <br /><br />
        하나의 합을 찾을 때마다 <span className="font-bold">1점</span>을 획득할 수 있고, 결인 상황에서 결을 누르면 <span className="font-bold">3점</span>을 획득할 수 있습니다.
        <br /><br />
        단, 아래의 경우에는 <span className="font-bold">1점</span>을 잃습니다.
        <br />
        <ul className="list-disc pt-5 pb-0 px-8">
          <li>합이 아닌 조합을 선택한 경우</li>
          <li>이미 선택했던 합을 중복 선택한 경우</li>
          <li>합이 남아 있는데 결을 누른 경우</li>
        </ul>
    </div>
  )
}

export default React.memo(Rule);