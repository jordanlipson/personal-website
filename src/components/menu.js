import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '../config';
import { KEY_CODES } from '../utils';
import { useOnClickOutside } from '../hooks';

const StyledMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;


const Menu = () => {


    return (
        <StyledMenu>
        </StyledMenu>
    );
};

export default Menu;