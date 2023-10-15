import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 p, ul, img {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1, h2 {
    text-align: center;
  }

  h1 {
    margin-top: 0;
  }

  section {
    width: 400px;
    margin: 0px auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
