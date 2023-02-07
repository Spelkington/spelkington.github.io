import * as React from "react";
import { Link, graphql } from "gatsby";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { MDXProvider } from "@mdx-js/react";
import { Code } from "../components/blog/code";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import MuiMarkdown from "mui-markdown";

import Layout from "../components/site/layout";
import Seo from "../components/site/seo";

interface Props {
  data: any;
  pageContext?: any;
  location?: any;
}

const BlogPostTemplate = ({ data, location }: Props) => {
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
      <Grid item xs={12}>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <Typography variant="h4" itemProp="headline">
              {post.frontmatter.title}
            </Typography>
            <Typography variant="subtitle1">{post.frontmatter.date}</Typography>
          </header>
          <section itemProp="articleBody">
            <MuiMarkdown>{post.body}</MuiMarkdown>
          </section>
        </article>
      </Grid>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => {
  const post = data.mdx;

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
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Seo title={data.mdx.frontmatter.title} description={""} />;
    </>
  );
};

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
      body
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
