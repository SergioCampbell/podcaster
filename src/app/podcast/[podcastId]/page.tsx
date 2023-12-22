"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PodcastTable } from "@/components/Podcast/PodcastTable";
import { Box, Stack, Typography } from "@mui/material";
import { Result } from "@/interface/podcastDetail";
import { usePodcastDetail } from "@/hooks";
import Loading from "@/components/Loading";

/**
 * Renders the PodcastPage component.
 *
 * @return {JSX.Element} The JSX representation of the PodcastPage component.
 */
const PodcastPage = () => {
  const { podcastId } = useParams();
  const { data, isLoading } = usePodcastDetail(String(podcastId));

  const [podcastTable, setPodcastTable] = useState<Result[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (data === undefined) return;
    if (data && "resultCount" in data) {
      setTotalCount(data?.resultCount);
      setPodcastTable(data?.results);
    }
  }, [data, totalCount]);

  return (
    <Stack flex={2}>
      <Typography
        variant="h4"
        margin={5}
        padding={5}
        borderRadius={3}
        boxShadow={5}
      >
        Epidodes: {totalCount}
      </Typography>
      <Box margin={5} padding={5} borderRadius={3} boxShadow={5}>
        {podcastTable !== null && !isLoading && podcastTable.length > 0 ? (
          <PodcastTable data={podcastTable} />
        ) : (
          <Loading />
        )}
      </Box>
    </Stack>
  );
};

export default PodcastPage;
