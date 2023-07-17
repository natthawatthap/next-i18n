// pages/index.js
import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p>{t("welcome_msg")}</p>
      <p>{t("greeting")}</p>
    </div>
  );
}

export default Home;
