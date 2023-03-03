import * as React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Head, Nav, Footer } from './index'
import { GlobalStyle } from "../styles/index";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children }) => {
    // const isHome = location.pathname === '/';

    return (
        <>
            <Head />

            <div id='root'>
                <GlobalStyle />

                <StyledContent>
                    <Nav />

                    <div id='content'>
                        {children}
                        <Footer />
                    </div>
                </StyledContent>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    // location: PropTypes.object.isRequired,
};

export default Layout;