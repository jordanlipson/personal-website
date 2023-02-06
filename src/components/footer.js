import * as React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config';

const StyledFooter = styled.footer`

`;

const StyledSocialLinks = styled.div`

`

const StyledCredit = styled.div`

`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledSocialLinks>
                <ul>
                    {socialMedia && socialMedia.map(({ name, url }, i) => (
                        <li key={i}>
                            <a href={url}>{name}</a>
                        </li>
                    ))}
                </ul>
            </StyledSocialLinks>

            <StyledCredit>
                <a href='https://github.com/jordanlipson/personal-website'>
                    <div>Designed &amp; Built by Jordan Lipson</div>
                </a>
            </StyledCredit>
        </StyledFooter>
    );
};

export default Footer;