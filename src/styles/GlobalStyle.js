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
    }

    ul {
        list-style: none;

        a {
            text-decoration: none;
        }
    }

    h1 {
        // font-family: 'TT Ricordi Greto';
    }

    .section-header {
        font-size: clamp(40px, 5vw, 60px);
    }

    .nav-links {
        
    }

`;

export default GlobalStyle;