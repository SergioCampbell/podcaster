"use client";
import { Sidebar } from "@/components/Sidebar";
import { useParams } from "next/navigation";
import React from "react";
import { podcastDetail } from "../../../../db/data";
import { Navbar } from "@/components/navbar";
import { PodcastTable } from "@/components/Podcast/PodcastTable";
import { Box, Stack, Typography } from "@mui/material";

const PodcastPage = () => {
  //TODO: get the podcast id from the url
  const { podcastId } = useParams();
  const { results, resultCount } = podcastDetail;

  return (
    <div>
      <Navbar />
      <Stack direction="row">
        <Sidebar resultCount={0} results={results} />
        <Box flex={1}>
          <Typography
            variant="h4"
            margin={5}
            padding={5}
            borderRadius={3}
            boxShadow={5}
          >
            Epidodes: {resultCount}
          </Typography>
          <Box margin={5} padding={5} borderRadius={3} boxShadow={5}>
            <PodcastTable data={podcastDetail.results} />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default PodcastPage;
