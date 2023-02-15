/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function getRandomInt(min: number, max: number) {
  const randNum = Math.random() * (max - min) + min;
  return Math.floor(randNum);
}

const NavAvatar = (props: { src: any }) => {
  // If an avatar link is present, show the image - otherwise,
  // return an empty div
  return props.src ? (
    <Link to="/">
      <img
        src={props.src}
        alt="Profile picture"
        width={100}
        height={100}
        style={{ borderRadius: 25 }}
      />
    </Link>
  ) : (
    <></>
  );
};

const NavTitle = (props: {
  title: any;
  authorName: any;
  flavorText: string;
}) => {
  return (
    <>
      <Typography variant="h6">{props.authorName}&apos;s</Typography>
      <Link to="/">
        <Typography
          variant="h1"
          fontFamily="Doodle Speen"
          fontWeight={500}
          margin="-0.8rem 0 -0.5rem 0"
        >
          {props.title}
        </Typography>
      </Link>
      {props.flavorText ? (
        <Typography
          variant="h6"
          color="#777"
          fontFamily="Doodle Speen"
          lineHeight="1em"
          display="flex"
        >
          {props.flavorText}
        </Typography>
      ) : (
        <></>
      )}
    </>
  );
};

const NavLinks = (props: { links: any }) => {
  return (
    <>
      {props.links?.map(link => {
        // Check for null links and return an empty container if the link, label, or
        // linktext are missing
        if (!link || !link.label || !link.link) {
          return <></>;
        }

        return (
          <Grid item key={link?.link}>
            <Typography variant="h2" component="span" fontFamily="Doodle Speen">
              <a href={link?.link}>{link?.label}</a>
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};

interface NavbarProps {
  addFlavorText: boolean;
}

const Navbar = ({ addFlavorText }: NavbarProps) => {
  const data: Queries.FetchNavContentQuery = useStaticQuery(graphql`
    query FetchNavContent {
      site {
        siteMetadata {
          title
          author {
            name
          }
          avatarLink
          navigation {
            navLinks {
              label
              link
            }
            flavorTexts
          }
        }
      }
    }
  `);

  const title = data.site?.siteMetadata?.title;
  const authorName = data.site?.siteMetadata?.author?.name;
  const avatarLink = data.site?.siteMetadata?.avatarLink;
  const navLinks = data.site?.siteMetadata?.navigation?.navLinks;
  const flavorTexts = data.site?.siteMetadata?.navigation?.flavorTexts;

  let flavorTextChoice = "";
  if (flavorTexts && flavorTexts.length > 0) {
    flavorTextChoice = flavorTexts[getRandomInt(0, flavorTexts.length)];
  }

  return (
    <>
      <Grid
        container
        className="navbar"
        justifyContent="center"
        alignItems="center"
        rowSpacing={10}
      >
        <Grid
          item
          className="navAvatar"
          xs={12}
          sm={"auto"}
          textAlign={{ xs: "center", sm: "right" }}
          marginRight={{ xs: 0, sm: 2 }}
        >
          <NavAvatar src={avatarLink} />
        </Grid>

        <Grid
          className="navTitle"
          item
          xs={12}
          sm={7}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <NavTitle
            title={title}
            authorName={authorName}
            flavorText={flavorTextChoice}
          />
        </Grid>

        {/* Navigation links */}
        <Grid
          className="navLinks"
          container
          textAlign="center"
          spacing={{ xs: 4, sm: 10 }}
          justifyContent="center"
        >
          <NavLinks links={navLinks} />
        </Grid>
      </Grid>
      <hr className="nav-break" />
    </>
  );
};

export default Navbar;
