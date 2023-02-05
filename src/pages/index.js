import * as React from "react"
import PropTypes from 'prop-types';
import { Layout, Nav, Hero, Work, About, Contact } from '../components';
import { GlobalStyle } from "../styles";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
    </>
  )
}

export default IndexPage