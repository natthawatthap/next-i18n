// pages/_app.js
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "@/public/locales/en.json";
import th from "@/public/locales/th.json";
import { useEffect } from "react";

import LanguageSwitcher from "@/components/LanguageSwitcher";

const messages = {
  en,
  th,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!router.locale) {
      router.push(router.pathname, router.pathname, { locale: "en" });
    }
  }, [router]);

  return (
    <IntlProvider
      locale={router.locale || "en"}
      messages={messages[router.locale || "en"]}
    >
      <LanguageSwitcher />
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
