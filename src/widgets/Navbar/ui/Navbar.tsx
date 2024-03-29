import { Link } from "react-router-dom";
import classNames from "../../../shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";
interface NavBarProps {
  className?: string;
}
export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames([cls.navbar, className], {})}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
