import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Fragment } from "react";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans');
  body, input, select, button{
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
  }
  *{
    box-sizing: border-box;
  }
  body,h1,h2,h3,h4,h5,h6,p{
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
