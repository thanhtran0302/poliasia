import { createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import paragraphs from '../constants/paragraphs';
import spaces from '../constants/spaces';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth !important;
    padding: 0;
    margin: 0;
    font-family: Source Sans Pro, Anton, Roboto, sans-serif;
    color: ${colors.dark[100]};
    font-size: ${fonts[16]};
    line-height: ${spaces[24]};
    overflow: hidden;
  }

  html {
    scroll-behavior: auto;
    height: 100%;
    min-height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
  }
  a {
    text-decoration: none;
  }
  #__next {
    min-height: 100%;
    height: 100%;

    *, input, label, textarea {
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
      * {
        font-family: Anton;
      }
    }

    h1 {
      ${paragraphs.h1};
    }
    h2 {
      ${paragraphs.h2};
    }
    h3 {
      ${paragraphs.h3};
    }
    h4 {
      ${paragraphs.h4};
    }
  }

  button {
    font-family: Source Sans Pro;
  }

  a {
    color: ${colors.blue};
    font-weight: bold;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
