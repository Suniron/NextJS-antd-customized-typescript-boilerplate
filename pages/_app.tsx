import React from "react";
//import App, { AppProps, AppInitialProps, AppContext } from "next/app";
import { createOvermind, rehydrate } from "overmind";
import { Provider } from "overmind-react";
import { config } from "src/store";
// import { NextComponentType } from "next";
import "src/assets/styles/antd-custom.less";
import "src/assets/styles/global.scss";

const overmind = createOvermind(config);
//NextComponentType<AppContext, AppInitialProps, AppProps> =
export default ({ Component, pageProps }) => {
  // CLIENT: On initial route
  // SERVER: On initial route
  const mutations = pageProps.mutations || [];

  if (typeof window !== "undefined") {
    // On the client we just instantiate the Overmind instance and run
    // the "changePage" action

    overmind.actions.changePage(mutations);
  } else {
    // On the server we rehydrate the mutations to an SSR instance of Overmind,
    // as we do not want to run any additional logic here
    rehydrate(overmind.state, mutations);
  }

  // CLIENT: After initial route, on page change
  // SERVER: never
  // This runs whenever the client routes to a new page
  overmind.actions.changePage(pageProps.mutations || []);

  // CLIENT: On every page change
  // SERVER: On initial route
  return (
    <Provider value={overmind}>
      <Component {...pageProps} />
    </Provider>
  );
};
