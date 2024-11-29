import React from "react";
import "./global.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Landing } from "./pages/Landing";
import { Theme } from "./utils/GlobalInterfaces";

const theme: Theme = {
  colors: {
    blue: "#1DA1F2",
    black: "#141z1a",
    darkGray: "#657786",
    gray: "#AAB8C2",
    lightGray: "#E1E8ED",
    white: "#F5F8FA",
    error: "red",
  },
};

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
  }
`;

export const App = () => {
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Landing></Landing>
  </ThemeProvider>;
};
