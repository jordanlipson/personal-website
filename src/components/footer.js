import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCredit = styled.div`

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