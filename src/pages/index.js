import * as React from "react"
import PropTypes from 'prop-types';
import { Layout, Hero, Work, About, Contact } from '../components';

const IndexPage = () => {
  return (
    <Layout >
      <Hero />
      <Work />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage