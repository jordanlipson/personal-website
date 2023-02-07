import { css } from "styled-components";

// import font file
import NewSpiritSemiboldWoff2 from '../fonts/NewSpiritTRIAL-SemiBold.woff2'

// categorize by weight
const newSpiritWeights = {
    600: [NewSpiritSemiboldWoff2],
};

// assign details (name, weight) to a var
const newSpirit = {
    name: 'New Spirit',
    normal: newSpiritWeights,
}

// function to create font face
const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, formats] of Object.entries(family[style])) {
        const woff2 = formats[0];

        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${woff2}) format('woff2');
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `;
    }

    return styles;
};

// create font face for font
const newSpiritNormal = createFontFaces(newSpirit)

// Fonts component to be exported
const Fonts = css`
    ${newSpiritNormal}
`;

export default Fonts;