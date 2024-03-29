import classNames from "../../shared/lib/classNames/classNames";
import CssClasses from "./LangSwitcher.module.scss";

import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../../shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames([CssClasses.LangSwitcher, className], {})}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t("Язык")}
    </Button>
  );
};
