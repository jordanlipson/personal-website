import * as React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";

const StyledWorkSection = styled.section`
    height: 80vh;
    margin: 8em;
    padding-top: 10em;

    @media (max-width: 768px) {
        padding-top: 5em;
        margin-top: 12em;
    }

    @media (max-width: 470px) {
        height: 90vh;
        margin: 10em 1em 0;
        // width: 17em;
        // height: 17em;
    }
`

const StyledProjectGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    // grid-auto-rows: 2fr 2fr;
    gap: 1em;

    @media (max-width: 768px) {
        display: block;
        // padding: 2em;
    }
`

const StyledProject = styled.div`
    width: 25em;
    height: 25em;
    background: #658F78;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media (max-width: 950px) {
        width: 20em;
        height: 20em;
    }
    
    @media (max-width: 768px) {
        margin-top: 1em;
    }

    * {
        color: #fff;
    }

    .shown-project-content {
        // display: flex;
        // align-items: center;
    }

    .hidden-project-content {
        display: none;
    }

    :hover .shown-project-content {
        display: none;
    }

    :hover .hidden-project-content {
        display: block;
    }
`

const Work = () => {
    const projects = [
        {
            name: 'Inner Garden',
            description: 'UXL 2023 Design-a-thon Case Study',
            url: 'https://jordanlipson.notion.site/Case-Study-Inner-Garden-d71a051c5e814eccbedf70f60cd424e5',
            imgName: 'innergardenmockup.svg',
            width: '40%',
        },
        {
            name: 'Kynza',
            description: 'Take Home Assignment',
            url: 'https://jordanlipson.notion.site/Case-Study-Kynza-dfdc3681645e44278230ab8f6f737d89',
            imgName: 'kynzatakehome.svg',
            width: '50%',
        },
    ];

    return (
        <StyledWorkSection id='work'>
            <h3 className='section-header'>Projects</h3>
            <StyledProjectGrid>
                {projects && projects.map(({ name, description, url, imgName, width }, i) => (
                    <a className='project-links' href={url} target="_blank" rel="noopener noreferrer">
                        <StyledProject key={i} id={i}>
                            {/* <div className='wrapper'> */}
                            <div className='shown-project-content'>
                                <img
                                    // src={'../../images/' + imgName}
                                    src={'/' + imgName}
                                    alt={name + ' preview image'}
                                    width={width}
                                />
                            </div>
                            <div className='hidden-project-content'>
                                <h1>{name}</h1>
                                <h3>{description}</h3>
                            </div>
                            {/* </div> */}
                        </StyledProject>
                    </a>
                ))}
            </StyledProjectGrid>
        </StyledWorkSection>
    )
};

export default Work;