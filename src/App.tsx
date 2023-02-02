import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(localStorage);
  return (
    <div
      className={classNames(["app", theme], { hovered: true, selected: false })}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
