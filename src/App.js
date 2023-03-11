import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Contents from "./components/Contents";
import Rule from "./components/Rule";
import ThemeButton from "./components/ThemeButton";

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
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-dark-white text-center font-GothicA1 text-black dark:bg-black">
            <p className="mb-3 text-2xl font-bold dark:text-dark-white sm:mb-5 sm:text-3xl	2xl:text-4xl">
                결! 합! 게임
            </p>

            <div className="relative mx-auto my-0 h-112 w-80 overflow-hidden rounded-3xl bg-white shadow-md dark:bg-dark-white sm:h-144 sm:w-104 2xl:h-160 2xl:w-112">
                <Contents />
                {rule && <Rule />}
            </div>

            <div className="mt-2.5 flex w-80 justify-between sm:w-104 2xl:w-112">
                <button
                    className="rounded-full bg-white px-2 text-sm text-black	shadow-md dark:bg-dark-white sm:px-3.5 sm:text-base 2xl:h-10"
                    onClick={() => setRule(!rule)}
                >
                    {!rule ? "규칙 보기" : "규칙 닫기"}
                </button>

                <ThemeButton theme={theme} setTheme={setTheme} />
            </div>

            <Toaster />
        </div>
    );
}

export default App;
