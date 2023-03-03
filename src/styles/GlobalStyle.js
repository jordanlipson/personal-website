import { createGlobalStyle } from "styled-components";
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts}

    html {
        box-sizing: border-box;
        width: 100%;
        background-color: #F5F0E7;
        scroll-behavior: smooth;
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
    }

    .section-header {
        // font-size: clamp(15px, 3vw, 30px);
        font-size: clamp(1.5rem, 3vw, 30px); 
    }

    .social-links  {

        :hover {
            transition: all .4s ease;
            color: #658F78;
        }
    }
`;

export default GlobalStyle;