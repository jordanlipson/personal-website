import * as React from "react"
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from "styled-components";
import { Nav } from './index'
import { GlobalStyle } from "../styles/index";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
    // const isHome = location.pathname === '/';

    return (
        <>
            {/* <Head /> */}

            <div id='root'>
                <GlobalStyle />

                <StyledContent>
                    <Nav />

                    <div id='content'>
                        {children}
                    </div>
                </StyledContent>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Layout;