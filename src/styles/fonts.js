import { css } from "styled-components";

// import font file
import LausannePanRegular500Woff2 from '../fonts/TWKLausannePan-500.woff2';

import TTRicordiGretoMediumttf from '../fonts/TT Ricordi Greto Trial Medium.ttf';

// categorize by weight
const lausannePanNormalWeights = {
    500: [LausannePanRegular500Woff2],
};

const ricordiGretoWeights = {
    500: [TTRicordiGretoMediumttf],
}

// assign details (name, weight) to a var
const lausannePan = {
    name: 'Lausanne Pan',
    normal: lausannePanNormalWeights,
}

const ricordiGreto = {
    name: 'TT Ricordi Greto',
    normal: ricordiGretoWeights,
}

// function to create font face
const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, formats] of Object.entries(family[style])) {
        const woff2 = formats[0];
        const ttf = formats[1];

        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${woff2}) format('woff2'),
                    url(${ttf}) format('ttf');
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `;
    }

    return styles;
};

// create font face for font
const lausannePanNormal = createFontFaces(lausannePan)
const ricordiGretoNormal = createFontFaces(ricordiGreto)

// Fonts component to be exported
const Fonts = css`
    ${lausannePanNormal + ricordiGretoNormal}
`;

export default Fonts;