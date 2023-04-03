import classNames from "../../../lib/classNames/classNames";
import CssClasses from "./ThemeSwitcher.module.scss";

import type { PropsWithChildren } from "react";
import { useTheme } from "../../../../app/providers/ThemeProviders";
import LightIcon from "../../../assets/icons/theme-light.svg";
import DarkIcon from "../../../assets/icons/theme-dark.svg";
import { Theme } from "../../../../app/App";
import { Button, ThemeButton } from "../../Button/Button";
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: PropsWithChildren<ThemeSwitcherProps>) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames([CssClasses.ThemeSwitcher, className], {})}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
