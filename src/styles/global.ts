import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;  
}

html {
  font-size: 62.5%;
}

body {
  background-color: #000;
  color: #eee;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  

  width: 130rem;
  max-width: 90%;
  padding: 5rem 0;
  margin: 0 auto;
}

h1 {
  font-size: 5rem;
  margin-bottom: 3rem;
}
`;
