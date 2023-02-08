import * as React from "react";
import { graphql } from "gatsby";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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

  return (
    <Layout location={location} title={siteTitle}>
      <Grid item xs={12}>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <Typography variant="h2" itemProp="headline">
              {post.frontmatter.title}
            </Typography>
            <Typography variant="subtitle2" marginBottom="2rem">
              {post.frontmatter.date}
            </Typography>
          </header>

          <section itemProp="articleBody">
            <MuiMarkdown
              overrides={{
                h1: {
                  component: Typography,
                  props: {
                    variant: "h3",
                  },
                },
                h2: {
                  component: Typography,
                  props: {
                    variant: "h4",
                  },
                },
                h3: {
                  component: Typography,
                  props: {
                    variant: "h5",
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: "body1",
                    gutterBottom: false,
                  },
                },
              }}
            >
              {post.body}
            </MuiMarkdown>
          </section>
        </article>
      </Grid>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }: Props) => {
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
      <Seo title={data.mdx.frontmatter.title} description={seoDescription} />;
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
