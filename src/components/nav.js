import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '../config'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    padding: 2em 2em;
    // z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    pointer-events: auto !important;
    user-select: auto !important;

    @media (max-width: 1080px) {
        padding: 2em 2em;
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
                <StyledLinks className='nav-links'>
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