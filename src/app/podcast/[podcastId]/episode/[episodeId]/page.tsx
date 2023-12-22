"use client";
import Loading from "@/components/Loading";
import { usePodcastMedia } from "@/hooks";
import { Result } from "@/interface/podcastDetail";
import { DEFAULT_VALUES } from "@/libs/defaultValues";
import { Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Linkify from "linkify-react";

const Episodepage = () => {
  const params = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const { data: trackDetail, isLoading } = usePodcastMedia(params);
  const [episodes, setEpisodes] = useState<Result>(DEFAULT_VALUES);

  useEffect(() => {
    if (!trackDetail) return;
    setEpisodes(trackDetail as Result);
  }, [trackDetail]);

  return (
    <Box
      component={"article"}
      margin={5}
      padding={5}
      borderRadius={3}
      boxShadow={5}
    >
      <Typography variant="h4">{episodes.trackName}</Typography>
      {episodes?.description?.length ?? 0 > 5000 ? (
        <Linkify
          as="p"
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            marginTop: "20px",
            marginBottom: "30px",
            marginLeft: "5px",
          }}
        >
          {episodes.description}
        </Linkify>
      ) : (
        <Typography variant="body1" mb={3} mt={2}>
          {episodes.shortDescription || "No Description"}
        </Typography>
      )}
      <audio controls style={{ width: "100%" }}>
        {isLoading ? (
          <Loading />
        ) : (
          <source
            src={episodes?.previewUrl}
            type={`${episodes?.episodeContentType}/${episodes?.episodeFileExtension}`}
          />
        )}
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
};

export default Episodepage;
