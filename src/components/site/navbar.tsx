/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function getRandomInt(min: number, max: number) {
  const randNum = (Math.random() * (max - min)) + min;
  return Math.floor(randNum);
}

const Navbar = () => {

  const data: Queries.FetchNavContentQuery = useStaticQuery(graphql`
    query FetchNavContent {
      site {
        siteMetadata {
          title,
          author { name },
          avatarLink,
          navigation {
            navLinks {
              label,
              link,
            },
            flavorTexts,
          }
        }
      }
    }
  `)

  // TODO: The sheer amount of annotation on this is real rough.
  //       I believe the solution is to explicitly define Gatsby node types,
  //       but I'm not going to do that right now.
  //
  //       https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/
  //
  const title = data.site?.siteMetadata?.title!;
  const authorName = data.site?.siteMetadata?.author?.name!;
  const avatarLink = data.site?.siteMetadata?.avatarLink!;
  const navLinks = data.site?.siteMetadata?.navigation?.navLinks!;
  const flavorTexts = data.site?.siteMetadata?.navigation?.flavorTexts!;

  const flavorTextChoice = flavorTexts[getRandomInt(0, flavorTexts.length)]

  return (
    <div className="nav">

      <div className="nav-head">
        <img
          className="nav-avatar"
          src={avatarLink}
          alt="Profile picture"
        />
        <div className="nav-label">
          <h5>{authorName}'s</h5>
          <Link to="/">
            <h1>{title}</h1>
          </Link>
        </div>
      </div>

      <div className="nav-flavortext">
        <h5>{flavorTextChoice}</h5>
      </div>

      <div className="nav-links">
        <ul>
          {navLinks.map(link => (
            <li key={link?.label}>
              <Link to={link?.link!}>
                <h4>{link?.label}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <hr></hr>

    </div>
  )
}

export default Navbar;
