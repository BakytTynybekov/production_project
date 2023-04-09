import classNames from "../../../shared/lib/classNames/classNames";
import CssClasses from "./Sidebar.module.scss";

import { PropsWithChildren, useState } from "react";
import { ThemeSwitcher } from "../../../shared/ui/ThemeSwitcher";
import { LangSwitcher } from "../../LangSwitcher/LangSwitcher";
import { Button } from "../../../shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames([CssClasses.Sidebar, className], {
        [CssClasses.collapsed]: collapsed,
      })}
    >
      <Button data-testId="sidebar-toggle" onClick={onToggle}>
        Toggle
      </Button>
      <div className={CssClasses.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
