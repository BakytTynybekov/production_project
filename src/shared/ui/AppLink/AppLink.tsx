import classNames from "../../lib/classNames/classNames";
import CssClasses from "./AppLink.module.scss";

import type { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link
      to={to}
      className={classNames(
        [CssClasses.AppLink, className, CssClasses[theme]],
        {}
      )}
    >
      {children}
    </Link>
  );
};
