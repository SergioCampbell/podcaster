import { Podcasts } from "@/interface/podcasts";
import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";

interface SidebarProps {
  podcast?: Podcasts;
}

/**
 * Renders the sidebar component.
 *
 * @param {SidebarProps} podcast - The podcast object.
 * @return {JSX.Element} The rendered sidebar component.
 */
export const Sidebar = ({ podcast }: SidebarProps) => {
  ReactDOM.preload("https://placehold.co/400/png", { as: "image" });
  return (
    <Stack
      maxHeight={"90vh"}
      maxWidth={300}
      margin={5}
      padding={5}
      borderRadius={3}
      boxShadow={5}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="/podcast/[podcastid]"
        as={`/podcast/${podcast?.id?.attributes?.["im:id"]}`}
      >
        <Image
          style={{ display: "block", margin: "auto" }}
          width={200}
          height={200}
          src={podcast?.["im:image"]?.[2]?.label ?? ""}
          alt={podcast?.title?.label ?? "No Name"}
          priority
        />
        <Stack alignContent={"start"} justifyContent={"start"}>
          <Divider
            color="grey"
            sx={{ width: "auto", marginTop: 2, marginBottom: 2 }}
          />
          <strong>{podcast?.title?.label ?? "No Name"}</strong>
          <Typography fontStyle={"italic"}>
            By {podcast?.["im:artist"]?.label ?? "No Name"}
          </Typography>
        </Stack>
      </Link>
      <Divider
        color="grey"
        sx={{ idth: "auto", marginTop: 2, marginBottom: 2 }}
      />
      <summary>
        <strong>Description:</strong>
      </summary>
      <Stack display={"block"} className="multiline-ellipsis">
        <Typography fontStyle={"italic"} mt={1}>
          {podcast?.summary?.label ?? "No Description"}
        </Typography>
      </Stack>
    </Stack>
  );
};
