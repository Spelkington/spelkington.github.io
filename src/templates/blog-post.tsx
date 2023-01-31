import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/site/layout";
import Seo from "../components/site/seo";

interface Props {
  data: {
    markdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
    previous: any;
    next: any;
  };
  pageContext?: any;
  location?: any;
}

const BlogPostTemplate = ({ data, location }: Props) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || "Title";

  const { previous, next } = data;

  let seoDescription = post.frontmatter.description || post.excerpt;

  // Append tags onto the end of the description if a post was available.
  if (post && post.frontmatter.public_tags) {
    const allTags: string[] = post.frontmatter.public_tags;
    let allTagString = allTags.slice(0, allTags.length - 1).join(", ");
    allTagString = `${allTagString}, and ${allTags[allTags.length - 1]}!`;
    allTagString = allTagString.toLocaleLowerCase();

    seoDescription += `\n\nHop in for a maybe-useful, maybe-unhinged read about ${allTagString}`;
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={seoDescription} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
