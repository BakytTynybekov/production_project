import React from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "../../../app/providers/errorBoundary";

function MainPage() {
  const { t } = useTranslation("main");
  return (
    <div>
      {t("Главная")}
      <BugButton />
    </div>
  );
}

export default MainPage;
