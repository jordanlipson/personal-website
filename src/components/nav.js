import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '../config'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    // z-index: 1;
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    pointer-events: auto !important;
    user-select: auto !important;

    @media (max-width: 1080px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 25px;
    }

`;

const StyledNav = styled.nav`
    position: relative;
    width: 100%;
`;

const StyledLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    } 

    ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            margin: 0 5px;
            position: relative;
            display: inline;
        }

        li:not(:last-child) {
            margin-right: 60px;
        }

        a {
            padding: 10px;
            text-decoration: none;
            color: #0A5029;
        }
    }
`;

const Nav = () => {
    const ResumeLink = (
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
        </a>
    );

    return (
        <StyledHeader>
            <StyledNav>
                <StyledLinks>
                    <ul>
                        {navLinks &&
                            navLinks.map(({ url, name }, i) => (
                                <li key={i}>
                                    <Link to={url}>{name}</Link>
                                </li>
                            ))}
                        <li>{ResumeLink}</li>
                    </ul>
                </StyledLinks>
            </StyledNav>
        </StyledHeader>
    )
};

export default Nav;