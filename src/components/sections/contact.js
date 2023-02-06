import * as React from 'react';
import { email } from '../../config';
import styled from "styled-components";

const StyledContactSection = styled.section`

`

const Contact = () => {

    return (
        <StyledContactSection>
            <h3 className='section-header'>Thanks for stopping by!</h3>
            <p>Have a question, some feedback, or simply want to chat?</p>

            <a className='email-link' href={`mailto:${email}`}>
                Get in Touch
            </a>
        </StyledContactSection>
    );
};

export default Contact;