import { createGlobalStyle } from "styled-components";
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts}

    html {
        box-sizing: border-box;
        width: 100%;
        background-color: #F5F0E7;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;

        a {
            text-decoration: none;
        }
    }

    h1 {
        font-family: 'New Spirit';
    }

    .section-header {
        font-size: clamp(40px, 5vw, 60px);
    }

    .nav-links {
        font-family: 'New Spirit';
    }

`;

export default GlobalStyle;