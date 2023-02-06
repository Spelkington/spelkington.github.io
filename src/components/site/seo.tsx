/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

interface Meta {
  property?: string;
  name?: string;
  content: string;
}

const Seo = ({ description, lang, meta, title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  // TODO: Figure out what this does in the context of the original SEO.
  // let typeSafeMeta: Array<Meta>;
  // if (meta instanceof Array) {
  //   typeSafeMeta = meta;
  // } else {
  //   typeSafeMeta = [];
  // }

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      {/* titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""} */}
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {/* TODO: Figure out what this means in the context of the original SEO. */}
      {/* {...typeSafeMeta} */}
    </>
  );
};

Seo.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
