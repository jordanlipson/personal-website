import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 10vh;
    // width: 120vw;
    // background-color: #0A5029;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        height: 5vh;
    }
`;

const StyledCredit = styled.div`
    display: inline-block;
    align-self: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledCredit>
                <a href='https://github.com/jordanlipson/personal-website' target="_blank" rel="noopener noreferrer">
                    <div className='social-links'>Designed &amp; Built by Jordan Lipson</div>
                </a>
            </StyledCredit>
        </StyledFooter>
    );
};

export default Footer;