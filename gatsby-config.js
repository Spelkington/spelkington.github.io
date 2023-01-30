module.exports = {
  siteMetadata: {
    title: "Chaotic Good Software",
    author: {
      name: "Spencer Elkington",
      summary:
        "who writes software that is broken, until - one day - it isn't.",
    },
    description: "A starter blog demonstrating what Gatsby can do.",
    siteUrl: "https://spelkington.github.io",
    social: {
      twitter: "spelkington",
    },
    avatarLink: "https://avatars.githubusercontent.com/u/32478118?v=4",
    navigation: {
      navLinks: [
        {
          label: "Resumé",
          link: "https://spelkington.github.io/Elkington_Resume.pdf",
        },
        {
          label: "GitHub",
          link: "https://github.com/spelkington",
        },
        {
          label: "LinkedIn",
          link: "https://linkedin.com/in/spelkington",
        },
      ],
      flavorTexts: [
        "I can code FizzBuzz in 18 different ways, and all of them are wrong",
        "Cause of Death: Gatsby & Typescript",
        "\"Inheritance\" is just a fancy term for Jupyter Notebooks calling other Jupyter Notebooks",
        "It's all fun and games until you ask me how a JavaScript Promise works",
        "This website could've just been an email",
        "All opinions expressed here are my own and do not reflect those of my employer (unless my employer is super cool)",
        "Flavortext 87",
        "If you see a typo: no it's not",
        "ChatGPT is just Clippy Incarnate",
        "If my Spark driver is going to die unexpectedly, it could at least do me a favor and take me with it",
        "I can usually read a triangular graph on the 8th or 9th try",
        "Cats do not adhere to the transitive property",
        "Make me CEO of Twitter so I can remove the entire UI and replace it with a Bash application",
        "#TeamHubAndSpokeModel",
        "BREAKING: The National Missile Defense has shot down a flying sleigh and nine reindeer off the coast of Miami",
        "The only thing stopping us from achieving world peace is the 12 pentagons on every tiled sphere",
        "Being at the front of the adoption curve means paying for Dominos in four interest-free payments",
        "My dream is to one day be a part of the shady cabal that runs Wordle",
        "Incredibly stoppable.",
        "AWS Graviton is just compute clusters made of unsold Fire phones",
        "Your email finds me incredibly unwell",
        "Most of my nightmares involve load-bearing Jupyter notebooks",
        "I will not sleep until the Keytar has the emoji it rightfully deserves",
        "Comments were removed to prevent being ratio'd on my own website",
        "what if we kissed 🥺👉👈 outside of Salt Lake City's Northrup Grumman IMAX Theater",
        "Please direct all concerns to the comment section below",
        "Startup Idea: PIPs, but for your kids",
        "str'berry",
        "Twitter search: \"<problematic word> until:2018-01-01 filter:follows\"",
        "Lead developer of the 10x team at Microsoft responsible for making sure no Office application correctly supports code formatting",
        "I don't know when and I don't know how, but I do know the AI apocalypse will start in Minecraft Command Blocks",
      ],
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Blog",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#ffffff",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
