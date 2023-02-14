import { useEffect, useState } from 'react';
import ThemeButton from './components/ThemeButton';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-GothicA1 text-center text-black bg-[#f8f9fa] dark:bg-black">
      <p className="text-4xl mb-5 font-bold	dark:text-dark-white">
        결! 합! 게임
      </p>
      
      <div className="w-104 h-128 rounded-2xl mx-auto my-0 shadow-md bg-white dark:bg-dark-white">

      </div>

      <div className="w-104 flex justify-between mt-2.5">
        <button className="h-10 px-3.5 rounded-full shadow-md text-black bg-white dark:bg-dark-white">
          규칙 보기
        </button>

        <ThemeButton theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
