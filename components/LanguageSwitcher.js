// components/LanguageSwitcher.js
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (language) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("th")}>Thai</button>
    </div>
  );
};

export default LanguageSwitcher;
