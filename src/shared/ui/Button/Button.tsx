import classNames from "../../lib/classNames/classNames";
import CssClasses from "./Button.module.scss";

import type {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(
        [CssClasses.Button, className, CssClasses[theme]],
        {}
      )}
    >
      {children}
    </button>
  );
};
