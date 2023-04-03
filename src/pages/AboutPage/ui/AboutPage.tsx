import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("О нас")}
      {t("Новый Перевод")}
    </div>
  );
}

export default AboutPage;
