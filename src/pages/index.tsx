import * as React from "react";
import { Link, graphql } from "gatsby";

import Grid from "@mui/material/Grid";
import Layout from "../components/site/layout";
import Seo from "../components/site/seo";
import Box from "@mui/material/Box";
import SearchBar from "../components/site/searchbar";
import Typography from "@mui/material/Typography";

interface Props {
  data: {
    allMdx: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location?: any;
}

const BlogIndex = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || "Title";

  // Collect posts from data, and filter down to only posts marked as visible or that do
  // not have a "visible" field
  const posts = data.allMdx.nodes.filter(
    (post: any) => post.frontmatter.visible === null || post.frontmatter.visible
  );

  const [displayPosts, setDisplayPosts] = React.useState(posts);
  const [currentQuery, setCurrentQuery] = React.useState("");

  const filterPosts = (query: string, slugs: string[]) => {
    setCurrentQuery(query);
    if (query.trim() === "") {
      setDisplayPosts(posts);
    } else {
      setDisplayPosts(
        posts.filter((post: any) => slugs.includes(post.fields.slug))
      );
    }
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Grid item xs={12} textAlign="center">
        <SearchBar location={location} submitCallback={filterPosts} />
      </Grid>
      {displayPosts.length === 0 ? (
        <p>
          {
            // TODO: Figure out how to stop making ESLint angry at literally any combination
            // of nested quotes
            // eslint-disable-next-line
              `No blog posts found for "${currentQuery}". Try searching for another term, like "Python" or "Games!"`
          }
        </p>
      ) : (
        displayPosts.map((post: any) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <Grid item xs={12} key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link to={post.fields.slug} itemProp="url">
                    <Typography variant="h3" component="h2" marginTop="1em">
                      {title}
                    </Typography>
                  </Link>
                  <Typography variant="subtitle1">
                    {post.frontmatter.date}
                  </Typography>
                </header>
                <section>
                  <Typography variant="body1" marginTop={0}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post.frontmatter.description || `“${post.excerpt}”`,
                      }}
                      itemProp="description"
                    />
                  </Typography>
                </section>
              </article>
            </Grid>
          );
        })
      )}
    </Layout>
  );
};

export default BlogIndex;

export const Head = ({ data }) => {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Seo title={data.site.siteMetadata.title} />;
    </>
  );
};

export const pageQuery = graphql`
  query BlogIndexFetchData {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 256)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          visible
          public_tags
          title
          description
        }
      }
    }
  }
`;
