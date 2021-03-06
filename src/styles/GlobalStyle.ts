import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 112.5%;
    @media (min-width: 1000px) {
      font-size: 125%;
    }
    color: #fff;
    background-color: #111;
  }
  
  body {
    background-color: hsl(212deg 100% 39%);
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
    box-shadow: 0 0 0 .2rem goldenrod;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  a {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }
`;
