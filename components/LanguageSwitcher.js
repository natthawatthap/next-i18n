// components/LanguageSwitcher.js
import React from "react";
import i18n from "@/i18n";

const LanguageSwitcher = () => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("th")}>ไทย</button>
    </div>
  );
};

export default LanguageSwitcher;
