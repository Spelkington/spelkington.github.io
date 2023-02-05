import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Code } from "../components/blog/code";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import Layout from "../components/site/layout";
import Seo from "../components/site/seo";

interface Props {
  data: any;
  pageContext?: any;
  location?: any;
  children: any;
}

const shortcodes = {
  InlineMath,
  BlockMath,
};

const swapComponents = {
  pre: Code,
};

const BlogPostTemplate = ({ data, location, children }: Props) => {
  const post = data.mdx;
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
        <section itemProp="articleBody">
          <MDXProvider components={shortcodes}>
            <MDXProvider components={swapComponents}>{children}</MDXProvider>
          </MDXProvider>
        </section>
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

export const query = graphql`
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
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
