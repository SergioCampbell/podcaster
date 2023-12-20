"use client";

import { AllPodcasts } from "@/interface/podcasts";
import {
  Card,
  CardContent,
  Typography,
  Skeleton,
  Avatar,
  Box,
  Link,
} from "@mui/material";
import Loading from "../Loading";

interface Props {
  allPodcast: AllPodcasts;
  loading?: boolean;
}

/**
 * Renders a list of podcast cards.
 *
 * @param {Props} allPodcast - The array of podcast data.
 * @param {() => void} hadlePodcast - The callback function to handle podcast interactions.
 * @param {boolean} loading - Indicates whether the podcast data is still loading.
 * @return {JSX.Element} The JSX element representing the rendered podcast cards.
 */
export const PodcastCards = ({ allPodcast, loading }: Props) => {
  return (
    <>
      {allPodcast !== undefined ? (
        allPodcast.map((podcast) => (
          <Box key={podcast.id?.attributes?.["im:id"]}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              href={`/podcast/${podcast.id?.attributes?.["im:id"]}`}
            >
              <Card
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  boxShadow: 5,
                  maxWidth: 300,
                  maxHeight: 300,
                }}
              >
                <CardContent>
                  {loading ? (
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={150}
                      height={150}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        width: 150,
                        height: 150,
                        left: 50,
                        bottom: 10,
                      }}
                      alt={podcast.title?.label}
                      src={podcast?.["im:image"]?.[2]?.label || ""}
                    />
                  )}
                  {loading ? (
                    <>
                      <Skeleton
                        animation="wave"
                        variant="text"
                        component={"h5"}
                      />
                      <Skeleton animation="wave" variant="text" />
                    </>
                  ) : (
                    <>
                      <Typography gutterBottom variant="h5" component="h5">
                        {podcast.title?.label}
                      </Typography>
                      <Typography gutterBottom sx={{ fontStyle: "italic" }}>
                        {podcast.title?.label}
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};
