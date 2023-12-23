"use client";

import { Box, Chip, Stack, TextField } from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";

interface FilterPros {
  searchQueary: string;
  setSearchQueary: (value: string) => void;
  totalPodcasts: number;
}
export const Filter = ({
  searchQueary,
  setSearchQueary,
  totalPodcasts,
}: FilterPros) => {
  const [myWidth, setMyWidth] = useState(0);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    setSearchQueary(value);
  };

  useEffect(() => {
    setMyWidth(window.screen.width);
  }, []);
  return (
    <Stack
      component="search"
      display={myWidth < 400 ? "contents" : "flex"}
      direction="row-reverse"
      maxWidth={myWidth < 400 ? "100%" : "98.5%"}
      sx={{ mt: 3 }}
    >
      <Box component="form" name="searchPodcast" mt={3}>
        <TextField
          name="search-podcast"
          id="filter-podcast"
          data-testid="search-podcast"
          label=""
          variant="outlined"
          placeholder="Filter Podcasts..."
          size="small"
          fullWidth
          value={searchQueary}
          onChange={handleSearch}
        />
      </Box>
      <Box component={"span"} mt={3.3} mr={1}>
        {totalPodcasts > 0 ? (
          <Chip
            label={totalPodcasts}
            color="primary"
            sx={{ alignContent: "center" }}
          />
        ) : null}
      </Box>
    </Stack>
  );
};
