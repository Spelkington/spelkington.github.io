import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/site/layout";
import Seo from "../components/site/seo";
import SearchBar from "../components/site/searchbar";

interface Props {
  data: {
    allMarkdownRemark: any;
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
  const posts = data.allMarkdownRemark.nodes;

  const [displayPosts, setDisplayPosts] = React.useState(posts);

  if (displayPosts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SearchBar submitCallback={filterPosts} />
        <Seo title="All posts" />
        <p>{"No blog posts found. :("}</p>
      </Layout>
    );
  }

  const filterPosts = (query: string, slugs: string[]) => {
    if (query.trim() === "") {
      setDisplayPosts(posts);
    } else {
      console.log(slugs);
      setDisplayPosts(
        posts.filter((post: any) => slugs.includes(post.fields.slug))
      );
    }
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home Page" />
      <SearchBar submitCallback={filterPosts} />

      <ol style={{ listStyle: "none" }}>
        {displayPosts.map((post: any) => {
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
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
