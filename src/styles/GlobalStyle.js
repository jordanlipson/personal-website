import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        width: 100%;
        background-color: #F5F0E7;
    }

    .section-header {
        font-size: clamp(40px, 5vw, 60px);
    }

`;

export default GlobalStyle;