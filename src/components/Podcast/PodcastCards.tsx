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
        <Box key={podcast.id?.attributes?.["im:id"]}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/podcast/[podcastid]"
            as={`/podcast/${podcast.id?.attributes?.["im:id"]}`}
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
                    <Tooltip title={podcast.title?.label}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
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
                    <Typography gutterBottom sx={{ fontStyle: "italic" }}>
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
