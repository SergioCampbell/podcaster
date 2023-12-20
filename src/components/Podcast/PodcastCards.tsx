"use client";

import { Podcasts } from "@/interface/podcasts";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
  Avatar,
  Box,
} from "@mui/material";
import { allPodcast as all } from "../../../db/allPodcast";
import { useState } from "react";
import Loading from "../Loading";
export const PodcastCards = (allPodcast?: Podcasts) => {
  const podcasts = all[0];
  const [loading, setLoading] = useState<boolean>(false);
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      {podcasts !== undefined ? (
        all.map((podcast) => (
          <Box key={podcast.id?.attributes?.["im:id"]}>
            <Card
              sx={{
                marginTop: 3,
                marginBottom: 2,
                boxShadow: 5,
                maxWidth: 300,
                maxHeight: 300,
              }}
              onClick={() => {
                handleLoading();
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
          </Box>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};
