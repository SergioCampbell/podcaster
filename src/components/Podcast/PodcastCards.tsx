"use client";
import Link from "next/link";
import { AllPodcasts } from "@/interface/podcasts";
import {
  Card,
  CardContent,
  Typography,
  Skeleton,
  Avatar,
  Box,
  Tooltip,
} from "@mui/material";

interface Props {
  allPodcast: AllPodcasts;
  loading?: boolean;
}
/**
 * Renders a list of podcast cards.
 *
 * @param {Props} allPodcast - The array of podcast data.
 * @param {boolean} loading - Indicates whether the podcast data is still loading.
 * @return {JSX.Element} The JSX element representing the rendered podcast cards.
 */
export const PodcastCards = ({ allPodcast, loading }: Props) => {
  return (
    <>
      {allPodcast.map((podcast) => (
        <Box key={podcast.id?.attributes?.["im:id"]} mt={3}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/podcast/[podcastid]"
            as={`/podcast/${podcast.id?.attributes?.["im:id"]}`}
          >
            <Card
              data-testid="podcast-artist"
              sx={{
                marginTop: 3,
                marginBottom: 2,
                boxShadow: 5,
                maxWidth: 300,
                maxHeight: 300,
              }}
            >
              <CardContent sx={{ minWidth: 300 }}>
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
                    <Tooltip title={podcast.title?.label}>
                      <Typography
                        variant="h6"
                        component="h6"
                        mr={window.screen.width < 400 ? 0 : 4}
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxLines: 2,
                        }}
                      >
                        {podcast.title?.label}
                      </Typography>
                    </Tooltip>
                    <Typography
                      mr={window.screen.width < 400 ? 0 : 4}
                      sx={{
                        fontStyle: "italic",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxLines: 2,
                      }}
                    >
                      {podcast["im:artist"]?.label}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Link>
        </Box>
      ))}
    </>
  );
};
