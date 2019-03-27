import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Fragment } from "react";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  body{
    font-family: "Lato";
  }
  body,h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
`;

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  </ThemeProvider>
);
