import * as React from "react"
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/index";

const Layout = () => {
    return (
        <div id='root'>
            <GlobalStyle />
        </div>
    )
};

export default Layout;