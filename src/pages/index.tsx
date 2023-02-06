import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/site/layout";
import Seo from "../components/site/seo";
import SearchBar from "../components/site/searchbar";
import CssBaseline from "@mui/material/CssBaseline";

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
    post => post.frontmatter.visible === null || post.frontmatter.visible
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
      <SearchBar location={location} submitCallback={filterPosts} />
      <ol style={{ listStyle: "none" }}>
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
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post.frontmatter.description || `“${post.excerpt}”`,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            );
          })
        )}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const Head = () => {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Seo title="Home Page" />;
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
