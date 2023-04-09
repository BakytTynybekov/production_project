import CssClasses from "./PageError.module.scss";

import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../shared/ui/Button/Button";
import classNames from "../../../shared/lib/classNames/classNames";

interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PropsWithChildren<PageErrorProps>) => {
  const { className } = props;
  const { t } = useTranslation("translation");

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames([CssClasses.PageError, className], {})}>
      <p>{t("Что-то произошло не так")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
