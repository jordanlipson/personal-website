import { createGlobalStyle } from "styled-components";
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts}

    html {
        box-sizing: border-box;
        width: 100%;
        background-color: #F5F0E7;
    }

    * {
        color: #0A5029;
        font-family: 'Lausanne Pan';
    }

    a {
        text-decoration: none;
        // color: inherit;
        // transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        :hover {
            color: #000;
        }
    }

    ul {
        list-style: none;
    }

    h1 {
        // font-family: 'TT Ricordi Greto';
    }

    .section-header {
        font-size: clamp(40px, 5vw, 60px);
    }

`;

export default GlobalStyle;