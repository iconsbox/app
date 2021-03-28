import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { Component } from "react";

type Props = {
  Component: typeof Component;
  pageProps: {
    [name: string]: any;
  };
};

function MyApp({ Component, pageProps }: Props) {
  const theme = {};
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
