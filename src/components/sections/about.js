import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";

const StyledAboutSection = styled.section`
    max-width: 900px;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledText = styled.div`
    ul.interests-list {
        list-style: none;

    }
`;

const StyledPic = styled.div`
    position: relative;
`

const About = () => {
    const interests = [
        'Practicing my languages, or learning new ones',
        'Pulling all-nighters at hackathons',
        'Listening to podcasts',
        'Reading in a cafe',
        'Spending all my money in plant stores',
        'Planning my next trip abroad'
    ]

    return (
        <StyledAboutSection id='about'>
            <h3 id='section-header'>Nice to meet you!</h3>

            <div className='inner'>
                <StyledText>
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

                    <ul className='interests-list'>
                        {interests && interests.map((interest, i) => <li key={i}>{interest}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
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
        </StyledAboutSection>
    );
};

export default About;