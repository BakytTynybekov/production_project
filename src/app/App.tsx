import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";
import "./styles/index.scss";
import classNames from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routes/intex";
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "../widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../widgets/LangSwitcher/LangSwitcher";
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames(["app", theme], { hovered: true, selected: false })}
    >
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
