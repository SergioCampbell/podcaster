import { Podcasts } from "@/interface/podcasts";
import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

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
      <Image
        style={{ display: "block", margin: "auto" }}
        width={200}
        height={200}
        src={podcast?.["im:image"]?.[2]?.label ?? ""}
        alt={podcast?.title?.label ?? "No Name"}
        priority={false}
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
