import { PodcastDetail } from "@/interface/podcastDetail";
import { Divider, Stack } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";

export const Sidebar = ({ results }: PodcastDetail) => {
  const podcast = results[0];
  return (
    <>
      {/* {results.map((podcast) => (
        <Fragment key={podcast.trackId}>
          <Image
            width={200}
            height={200}
            src={podcast.artworkUrl600}
            alt={podcast.collectionName}
          />
          <hr />
          <h4>{podcast.artistName ?? "No Name"}</h4>
          <hr />
          <details>
            <summary>Description:</summary>
            <p>{podcast.description}</p>
          </details>
        </Fragment>
      ))} */}
      <Stack
        margin={5}
        padding={5}
        key={podcast.trackId}
        spacing={{ xs: 2, sm: 1, md: 2, lg: 4 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={3}
        boxShadow={5}
      >
        <Image
          width={200}
          height={200}
          src={podcast.artworkUrl600}
          alt={podcast.collectionName}
        />
        <Divider color="secondary" />
        <h4>{podcast.artistName ?? "No Name"}</h4>
        <Divider color="secondary" />
        <summary>
          <strong>Description:</strong>
        </summary>
        <p>{podcast.description ?? "No Description"}</p>
      </Stack>
    </>
  );
};
