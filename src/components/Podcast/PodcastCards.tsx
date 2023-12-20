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
import { allPodcast as all } from "../../../db/allPodcast";
import Loading from "../Loading";

interface Props {
  allPodcast: AllPodcasts;
  hadlePodcast: () => void;
  loading?: boolean;
}
export const PodcastCards = ({ allPodcast, hadlePodcast, loading }: Props) => {
  const podcasts = all[0];

  return (
    <>
      {podcasts !== undefined ? (
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
                onClick={() => {
                  hadlePodcast();
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
