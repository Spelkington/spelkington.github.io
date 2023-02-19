module.exports = {
  siteMetadata: {
    title: "Chaotic Good Software",
    author: {
      name: "Spencer Elkington",
      summary:
        "who writes software that is broken, until - one day - it isn't.",
    },
    description:
      "A collection of rants and soft tutorials on programming, math, and economics",
    siteUrl: "https://spelkington.github.io",
    social: {
      twitter: "spelkington",
    },
    avatarLink: "https://avatars.githubusercontent.com/u/32478118?v=4",
    navigation: {
      navLinks: [
        {
          label: "Resume",
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
        "Do you think God lives in Heaven because He, too, lives in fear of what He's created?",
        "My favorite Age of Empires II loadout is: Sicilians; Flank; Losing Team",
        "I can code FizzBuzz in 18 different ways, and all of them are wrong",
        "Cause of Death: Gatsby & Typescript",
        "“Recursion” is just a fancy term for Jupyter Notebooks calling other Jupyter Notebooks",
        "It's all fun and games until you ask me how a JavaScript Promise works",
        "This website could've just been an email",
        "All opinions expressed here are my own and do not reflect those of my employer (unless my employer is super cool)",
        // "Flavortext 87",
        "If you see a typo: no it's not",
        "ChatGPT is just Clippy Incarnate",
        "If my Spark driver is going to die unexpectedly, it could at least do me a favor and take me with it",
        "I can usually read a triangular graph on the 8th or 9th try",
        "Cats do not adhere to the transitive property",
        "Make me CEO of Twitter so I can replace it with a Bash application",
        "Proud member of #TeamHubAndSpokeModel",
        "BREAKING: The National Missile Defense has shot down a flying sleigh and nine reindeer off the coast of Miami",
        "The only thing stopping us from achieving world peace is the 12 pentagons on every tiled sphere",
        "Being at the front of the adoption curve means paying for Dominos in four interest-free payments",
        "My dream is to one day be a part of the shady cabal that runs Wordle",
        "Incredibly stoppable.",
        "AWS Graviton is just compute clusters made of unsold Fire phones",
        "Your email finds me incredibly unwell",
        "Most of my nightmares involve load-bearing Jupyter notebooks",
        "I will not sleep until the Keytar has the emoji it rightfully deserves",
        // "Comments were removed to prevent being ratio'd on my own website",
        // "what if we kissed 🥺👉👈 outside of Salt Lake City's Northrup Grumman IMAX Theater",
        // "Please direct all concerns to the comment section below",
        "Startup Idea: PIPs, but for your kids",
        // "str'berry",
        // "Twitter search: `<problematic word> until:2018-01-01 filter:follows`",
        "Lead developer of the 10x team at Microsoft making sure no Office application correctly supports code formatting",
        "I don't know when and I don't know how, but I do know the AI apocalypse will start in Minecraft Command Blocks",
        "Forrest Gump is the only movie that deserves to be more than two hours long",
        "The finest 0.1x engineer west of the Mississippi",
        "If you ask me how much money I've spent on Bloons Tower Defense 6, I'll cry",
        "The government can't steal my thoughts because I haven't got any",
        "Money Tip: If you don't pay into either your retirement or your health insurance, you won't need either",
        "Raised by a man whose most-endorsed skill on LinkedIn is “Interrogation”",
        // "Incorrectly voted “Next Prophet” by my early-morning seminary cohort",
        "Described by my third-grade teacher as “lazy, but efficient”",
        "Between you and me, the long hair and beard is less a stylistic choice and more of a work ethic issue",
        "game.Workspace.Player.Head:Destroy()",
        "My ROBLOX account is old enough to drive",
        "Learning stenography hasn't make my code better, but it has made me bad, faster",
        "Where do I see myself in five years? 1,000 AoEII MMR, hopefully.",
        "SQL, but pronounced “Squeal”",
        "I'd rather be shot into Sol herself than touch VBA ever again",
        "My goal is to be funny enough for my therapist to work pro bono",
        "TCP throttling is just Prisoner's Dilemma for network engineers",
        "Aspring to reach the range of Hedy Lamarr",
      ],
    },
    searchTags: [
      // TODO: I should replace any non-source or non-Wiki icons with custom
      // SVG.
      {
        label: "Python",
        icon: "https://img.icons8.com/material/24/null/python.png",
      },
      {
        label: "Lua",
        icon: "https://www.andreas-rozek.de/Lua/Lua-Logo_128x128.png",
      },
      {
        label: "LaTeX",
        icon: "https://images.ctfassets.net/nrgyaltdicpt/2nBkkfg5vkAEOmdJOb1BkZ/61b5fb98c52d1be763426ee58f36bc6e/ologo_square_bw.svg",
      },
      {
        label: "Data",
        icon: "https://img.icons8.com/material/24/null/radar-plot.png",
      },
      {
        label: "Spark",
        icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_spark_logo_icon_170560.png",
      },
      {
        label: "GitHub",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png?20180806170715",
      },
      {
        label: "Economics",
        icon: "https://www.svgrepo.com/show/74893/planet-earth.svg",
      },
    ],
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
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
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
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
        extensions: [".md", ".mdx"],
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
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
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
              allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
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
        name: "Chaotic Good Software",
        short_name: "CGA",
        start_url: "/",
        background_color: "#ffffff",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: "minimal-ui",
        icon: "src/assets/images/avi.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "posts",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: "speed",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          query LocalPageSearch {
            allMdx {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                  public_tags
                  private_tags
                  description
                }
                excerpt
                body
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title", "body", "public_tags", "private_tags"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["id", "path", "title"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            // Since we don't put the slug in the frontmatter, we have to be a bit
            // tricky in how we snag the post file path
            path: node.fields.slug,
            title: node.frontmatter.title,
            body: node.body,

            // Combine public and private tags into space-joined strings to index
            public_tags: node.frontmatter.public_tags.join(" "),
            private_tags: node.frontmatter.private_tags.join(" "),
          })),
      },
    },
    "@iostindex/gatsby-plugin-material-ui",
  ],
};
