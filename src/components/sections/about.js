import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";

const StyledAboutSection = styled.section`
    height: 60vh;
    margin: 10em;
    padding-top: 10em;
    // align-items: center;

    @media (max-width: 950px){
        margin: 5em;
    }

    @media (max-width: 768px) {
        height: 100vh;
        padding-top: 2em;
        margin: 2em;
    }

    .p {
        line-height: 2em;
    }

    .grid-content {
        display: grid;
        grid-template-columns: 2fr 0.5fr;
        grid-gap: 2em;

        @media (max-width: 768px) {
            display: block;
        }
    }

`;

const StyledAboutContent = styled.div`

`

const StyledText = styled.div`
    max-width: 40em;

    @media (max-width: 768px) {
        max-width: 90vw;
    }
`;

const StyledPic = styled.div`
    position: relative;
    height: 25em;
    aspect-ratio: 2 / 3;
`

const About = () => {
    const interests = [
        'Practicing my languages, or learning new ones',
        'Pulling all-nighters at hackathons',
        'Listening to podcasts',
        'Reading in a cafe',
        'Rewatching The Crown or Downton Abbey',
        "Planning my next adventure abroad (I'm studying abroad in France next year!)"
    ]

    return (
        <StyledAboutSection id='about'>
            <h3 className='section-header'>Nice to meet you!</h3>

            <StyledAboutContent>
                <div className='grid-content'>
                    <StyledText className='grid-item'>
                        <div>
                            <p>
                                I’m Jordan, a digital product designer from Toronto, Canada.
                                I’m currently in my second year of studies in Cognitive Science
                                at Carleton University.
                            </p>
                            <p>
                                I actually used to be a Computer Science major, but I made the
                                switch when I realized I wanted to combine that path with the
                                other subjects I’m passionate about, psychology and linguistics.
                                Product design has been a way for me to bridge my diverse interests
                                with my love for design and innovation, as well as bring awareness to
                                the importance of accessibility and inclusivity.
                            </p>
                            <p>
                                Outside of school, you can probably find me:
                            </p>
                        </div>

                        <ul>
                            {interests && interests.map((interest, i) => <li key={i}>• {interest}</li>)}
                        </ul>
                    </StyledText>

                    <StyledPic className='grid-pic'>
                        <div className='wrapper'>
                            <StaticImage
                                className='img'
                                src='../../images/me.jpg'
                                width={500}
                                alt='Headshot'
                            />
                        </div>
                    </StyledPic>
                </div>
            </StyledAboutContent>
        </StyledAboutSection>
    );
};

export default About;