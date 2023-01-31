/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
  post: any | undefined;
}

interface Meta {
  property?: string;
  name?: string;
  content: string;
}

const Seo = ({ description, lang, meta, title, post }: Props) => {
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

  let metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  // Append tags onto the end of the description if a post was available.
  // TODO: This should probably be moved up to templates/blog-post.tsx
  if (post) {
    const allTags: string[] = post.frontmatter.public_tags;
    let allTagString = allTags.slice(0, allTags.length - 1).join(", ");
    allTagString = `${allTagString}, and ${allTags[allTags.length - 1]}!`;
    allTagString = allTagString.toLocaleLowerCase();

    metaDescription += `\n\nHop in for a maybe-useful, maybe-unhinged read about ${allTagString}`;
  }

  let typeSafeMeta: Array<Meta>;

  if (meta instanceof Array) {
    typeSafeMeta = meta;
  } else {
    typeSafeMeta = [];
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata?.social?.twitter || "",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        ...typeSafeMeta,
      ]}
    />
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
