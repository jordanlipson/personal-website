import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from "../hooks/use-site-metadata"

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, pathname }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
            <html lang="en" />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="url" content={seo.url} />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🌱</text></svg>" />

        </Helmet>
    );
};

export default Head;