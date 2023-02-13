import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dark, setDark] = useState("light");

  const onChangeTheme = () => {
    if(dark == "light") {
      setDark("dark");
      document.documentElement.classList.add("dark");
    } else {
      setDark("light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="text-3xl text-blue dark:bg-darkBlack">
      <p className="dark:text-darkWhite">test</p>
      <button onClick={onChangeTheme}>mode</button>
    </div>
  );
}

export default App;
