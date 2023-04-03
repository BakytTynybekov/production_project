import classNames from "../../../shared/lib/classNames/classNames";
import CssClasses from "./Sidebar.module.scss";

import { PropsWithChildren, useState } from "react";
import { ThemeSwitcher } from "../../../shared/ui/ThemeSwitcher";
import { LangSwitcher } from "../../LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(true);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames([CssClasses.Sidebar, className], {
        [CssClasses.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={CssClasses.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
