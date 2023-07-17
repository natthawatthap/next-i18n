import React from "react";
import { useIntl } from "react-intl";

const Home = () => {
  const intl = useIntl();

  return (
    <div>
      <h1>{intl.formatMessage({ id: "welcome" })}</h1>
      <p>{intl.formatMessage({ id: "greeting" })}</p>
    </div>
  );
};

export default Home;
