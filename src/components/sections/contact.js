import * as React from 'react';
import { email } from '../../config';
import { socialMedia } from '../../config';
import styled from "styled-components";

const StyledContactSection = styled.section`

`

const StyledSocialLinks = styled.div`

`

const Contact = () => {

    return (
        <StyledContactSection id='contact'>
            <h3 className='section-header'>Thanks for stopping by!</h3>
            <p>Have a question, some feedback, or simply want to chat?</p>

            <a className='email-link' href={`mailto:${email}`}>
                Get in Touch
            </a>

            <StyledSocialLinks>
                <ul>
                    {socialMedia && socialMedia.map(({ name, url }, i) => (
                        <li key={i}>
                            <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                        </li>
                    ))}
                </ul>
            </StyledSocialLinks>
        </StyledContactSection>
    );
};

export default Contact;