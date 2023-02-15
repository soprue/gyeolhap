import { useEffect, useState } from 'react';
import Contents from './components/Contents';
import Rule from './components/Rule';
import ThemeButton from './components/ThemeButton';

function App() {
  const [theme, setTheme] = useState("light");
  const [rule, setRule] = useState(false);

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
      
      <div className="w-112 h-136 rounded-[10px] mx-auto my-0 shadow-md bg-white dark:bg-dark-white">
        {!rule ? <Contents /> : <Rule />}
      </div>

      <div className="w-112 flex justify-between mt-2.5">
        <button
          className="h-10 px-3.5 rounded-full shadow-md text-black bg-white dark:bg-dark-white"
          onClick={() => setRule(!rule)}
        >
          규칙 보기
        </button>

        <ThemeButton theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
