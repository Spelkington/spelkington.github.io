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

interface NavLinkProps {
  label: string;
  link: string;
}

interface NavbarProps {
  location: any;
  addFlavorText: boolean;
}

function getRandomInt(min: number, max: number) {
  const randNum = Math.random() * (max - min) + min;
  return Math.floor(randNum);
}

const NavLinks = (props: { links: NavLinkProps[] }) => {
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
            <Typography variant="h2" component="span">
              <a href={link?.link}>{link?.label}</a>
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};

const Navbar = (props: NavbarProps) => {
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

  // Suss out & type important data from the GraphQL query.
  const title = data.site?.siteMetadata?.title as string;
  const authorName = data.site?.siteMetadata?.author?.name as string;
  const avatarLink = data.site?.siteMetadata?.avatarLink as string;
  const navLinks = data.site?.siteMetadata?.navigation
    ?.navLinks as NavLinkProps[];
  const flavorTexts: string[] = data.site?.siteMetadata?.navigation
    ?.flavorTexts as string[];

  const [flavorTextChoice, setFlavorTextChoice] = React.useState("");

  React.useEffect(() => {
    // Generate random flavortext number outside of the Navbar render,
    // -- important so that it doesn't change on every minor page load
    const flavorTextIndex = getRandomInt(0, 1000);

    // Set flavortext choice within limit of the flavortext array length,
    // but only if the flavortexts exist and contain more than 0 elements.
    if (flavorTexts && flavorTexts.length > 0) {
      setFlavorTextChoice(flavorTexts[flavorTextIndex % flavorTexts.length]);
    }
  }, [props.location]);

  return (
    <Typography fontFamily="Doodle Speen" component="div">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={{ xs: 3, sm: 3 }}
      >
        {/* Avatar */}
        <Grid
          item
          xs={12}
          sm={"auto"}
          textAlign={{ xs: "center", sm: "right" }}
          marginRight={{ xs: 0, sm: 2 }}
        >
          {avatarLink ? (
            <Link to="/">
              <img
                src={avatarLink}
                alt="Profile picture"
                width={100}
                height={100}
                style={{ borderRadius: 15 }}
              />
            </Link>
          ) : (
            <></>
          )}
        </Grid>

        {/* Title Card */}
        <Grid
          item
          xs={12}
          sm={"auto"}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Link to="/">
            <Typography variant="h2" component="span" color="#777">
              {authorName}&apos;s
            </Typography>
            <Typography
              variant="h1"
              style={{ margin: "-0.5rem 0 0 0" }}
              fontWeight={550}
            >
              {title}
            </Typography>
          </Link>
        </Grid>

        {/* Flavortext */}
        {props.addFlavorText ? (
          <Grid item xs={12} textAlign="center" color="#777">
            <Typography variant="h4" component="span">
              {flavorTextChoice}
            </Typography>
          </Grid>
        ) : (
          <></>
        )}

        {/* Navigation links */}
        <Grid item xs={12}>
          <Grid
            container
            textAlign="center"
            spacing={{ xs: 2, sm: 10 }}
            justifyContent="center"
          >
            <NavLinks links={navLinks} />
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </Typography>
  );
};

export default Navbar;
