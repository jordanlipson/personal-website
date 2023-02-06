import * as React from "react";
import styled from "styled-components";

const StyledHeroSection = styled.section`
    flex-direction: column;
    align-items: flex-start;

    @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
        height: auto;
        // padding-top: var(--nav-height);
    }

    h1 {
        color: #0A5029;
        font-size: 60px;
    }
`;

const Hero = () => {
    const messages = ["Hi", "Bonjour", "Hola", "Hallo", "Ciao"];
    // const scrollLink = (
    //     <a 
    //         className="work-link"
    //         >
    //         Scroll to see recent work
    //     </a>
    // );

    // const items = [one, two, three];

    return (
        <StyledHeroSection>
            <h1>{messages[0]}</h1>
            <h2>My name is Jordan Lipson.</h2>
            <h2>I’m a product designer (& developer) passionate about creating beautiful and accessible digital interfaces.</h2>
        </StyledHeroSection>
    );
};

export default Hero;