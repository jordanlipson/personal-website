import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`

`;

const StyledCredit = styled.div`

`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledCredit>
                <a href='https://github.com/jordanlipson/personal-website'>
                    <div>Designed &amp; Built by Jordan Lipson</div>
                </a>
            </StyledCredit>
        </StyledFooter>
    );
};

export default Footer;