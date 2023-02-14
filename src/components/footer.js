import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 10vh;
    // width: 120vw;
    // background-color: #0A5029;
    display: flex;
    justify-content: center;
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
                    <div>Designed &amp; Built by Jordan Lipson</div>
                </a>
            </StyledCredit>
        </StyledFooter>
    );
};

export default Footer;