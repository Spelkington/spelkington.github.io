import * as React from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { graphql, useStaticQuery } from "gatsby";

interface TagChipProps {
  tags: string[];
}

interface TagMetadata {
  readonly label?: string;
  readonly icon?: string;
  readonly chipColor?: string;
  readonly invertText: boolean;
}

const TagIcon = (props: { src: string }) => {
  return (
    <div>
      <img src={props.src} height="15px" />
    </div>
  );
};

const TagChips = (props: TagChipProps) => {
  if (!props.tags) {
    console.warn("Post tags not found!");
    return <></>;
  }

  const data: Queries.FetchTagContentQuery = useStaticQuery(graphql`
    query FetchTagContent {
      site {
        siteMetadata {
          searchTags {
            label
            icon
          }
        }
      }
    }
  `);

  // Retrieve the tag metadata from the GraphQL query - convert it to
  // a map of lowercased tag labels to TagMetadata
  const rawTagData: readonly TagMetadata[] | null | undefined = data.site
    ?.siteMetadata?.searchTags as TagMetadata[];
  let refinedTagData: any = undefined;
  if (rawTagData) {
    refinedTagData = Object.fromEntries(
      rawTagData.map(tag => [tag?.label?.toLowerCase(), tag])
    );
  }

  return (
    <Grid container justifyContent="center" spacing={1}>
      {props.tags.map(tag => {
        // Get metadata if metadata is available
        const metadata = refinedTagData
          ? refinedTagData[tag.toLowerCase()]
          : null;

        // If metadata for this specific tag was found, create a
        // chip with the associated properties. Otherwise, create a
        // default chip with only the label

        if (metadata) {
          return (
            <Grid item key={metadata.label}>
              <Chip
                avatar={
                  <Avatar
                    src={metadata.icon}
                    alt={metadata.label}
                    sizes="15px 15px"
                  />
                }
                label={metadata.label}
                component="a"
                href={`/?search=${metadata.label}`}
              />
            </Grid>
          );
        } else {
          return (
            <Grid item key={tag}>
              <Chip label={tag} component="a" href={`/?search=${tag}`} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default TagChips;
