import { PodcastDetail } from "@/interface/podcastDetail";
import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Sidebar = ({ results }: PodcastDetail) => {
  const podcast = results[0];
  return (
    <Stack
      maxHeight={"50vh"}
      margin={5}
      padding={5}
      key={podcast.trackId}
      borderRadius={3}
      boxShadow={5}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Image
        width={200}
        height={200}
        src={podcast.artworkUrl600}
        alt={podcast.collectionName}
        priority={false}
      />
      <Stack alignContent={"start"} justifyContent={"start"}>
        <Divider
          color="grey"
          sx={{ width: "auto", marginTop: 2, marginBottom: 2 }}
        />
        <strong>{podcast.collectionName ?? "No Name"}</strong>
        <Typography fontStyle={"italic"}>
          By {podcast.artistName ?? "No Name"}
        </Typography>
      </Stack>
      <Stack>
        <Divider
          color="grey"
          sx={{ idth: "auto", marginTop: 2, marginBottom: 2 }}
        />
        <summary>
          <strong>Description:</strong>
        </summary>
        <Typography fontStyle={"italic"} mt={1}>
          {podcast.shortDescription ?? "No Description"}
        </Typography>
      </Stack>
    </Stack>
  );
};
