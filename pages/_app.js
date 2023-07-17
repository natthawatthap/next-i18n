// pages/_app.js
import React from "react";
import { appWithTranslation } from "next-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";


function App({ Component, pageProps }) {
  return (
    <div>
      <LanguageSwitcher />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
