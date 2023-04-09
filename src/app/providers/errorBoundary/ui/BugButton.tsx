import CssClasses from "./BugButton.module.scss";

import { useEffect, useState } from "react";
import { Button } from "../../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

// Компонент для тестирование
export const BugButton = () => {
  const [error, setError] = useState(false);

  const { t } = useTranslation("translation");

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => {
    setError(true);
  };
  return <Button onClick={onThrow}>{t("Вызвать ошибку")}</Button>;
};
