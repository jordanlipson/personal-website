import * as React from "react";
import styled from "styled-components";

const StyledHeroSection = styled.section`
    h1 {
        color: #0A5029;
    }
`;

const Hero = () => {

    return (
        <StyledHeroSection>
            <h1>Hello</h1>
        </StyledHeroSection>
    );
};

export default Hero;