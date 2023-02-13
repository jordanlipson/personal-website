import * as React from "react";
import styled from "styled-components";

const StyledHeroSection = styled.section`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 2em;

    #hero {
        align-self: center;
    }

    #hero-center {
        text-align: center;
    }

    h1 {
        margin: 0px;
        font-size: 9vw;
        letter-spacing: .1rem;
    }

    h2 {
        font-size: 20px;
    }
    
    #description-header {
        margin-top: 7em;
    }

    @media (max-height: 700px) and (min-width: 700px), (max-width: 768px) {
        // height: auto;
        padding-top: 2em;

        h2 {
            font-size: calc(20px + 20 * ((100vw - 600px) / 600));
        }
    }
`;

const Hero = () => {
    const messages = ["Hi, I'm", "Bonjour, je m'appelle", "Hallo, ich bin", "Hola, soy", "Ciao, sono"];

    return (
        <StyledHeroSection>
            <div id="hero">
                <h2>{messages[0]}</h2>
                <h1>Jordan Lipson</h1>
                <div id="hero-center">
                    <h2 id="description-header">I design (& develop) beautiful and accessible digital interfaces.</h2>
                </div>
            </div>
        </StyledHeroSection>
    );
};

export default Hero;