import * as React from "react";
import PropTypes from "prop-types";
import {
    IconInstagram,
    IconLinkedin,
} from '../icons';

const Icon = ({ name }) => {
    switch (name) {
        case 'Instagram':
            return <IconInstagram />;
        case 'Linkedin':
            return <IconLinkedin />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;

