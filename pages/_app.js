import React from "react";
import App, { Container } from "next/app";
import WithTheme from "ui/with-theme";
require("isomorphic-fetch");

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <WithTheme>
          <Component {...pageProps} />
        </WithTheme>
      </Container>
    );
  }
}

export default MyApp;
