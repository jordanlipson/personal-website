import * as React from "react";
import styled from "styled-components";

const StyledHeroSection = styled.section`
    height: 95vh;
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
        flex-wrap: wrap;
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

    @media (max-width: 768px) {
        height: auto;
        margin-top: 12em;
        text-align: center;

        #description-header {
            margin-top: 4em;
        }

        h1 {
            font-size: calc(90px + 40 * ((100vw - 600px) / 600));
        }

        h2 {
            font-size: calc(30px + 30 * ((100vw - 600px) / 600));
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