import * as React from 'react';
import { email } from '../../config';
import { socialMedia } from '../../config';
import styled from "styled-components";

const StyledContactSection = styled.section`
    height: 90vh;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    ul {
        padding: 0px;

        li {
            display: inline;
        }

        li:not(:last-child) {
            margin-right: 35px;
        }
    }

    .email-link {
        // display: inline-block;
        margin-top: 50px;
        width: 6vw;
        background: #F5F0E7;
        border-radius: 4px;
        border: 0.15em solid #0A5029;
        padding: 1.5em 2em;
        align-self: center;
        text-align: center;
        
        :hover {
            transition: all .4s ease;
            background: #C4C3B3;
        }
    }

`

const StyledSocialLinks = styled.div`
    margin-top: 50px;

`

const Contact = () => {

    return (
        <StyledContactSection id='contact'>
            <h3 className='section-header'>Thanks for stopping by!</h3>
            <p>Have a question, some feedback, a book or movie rec, or simply want to chat?</p>

            <a className='email-link' href={`mailto:${email}`}>
                Say Hello
            </a>

            <StyledSocialLinks>
                <ul>
                    {socialMedia && socialMedia.map(({ name, url }, i) => (
                        <li key={i}>
                            <a className='social-links' href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                        </li>
                    ))}
                </ul>
            </StyledSocialLinks>
        </StyledContactSection>
    );
};

export default Contact;