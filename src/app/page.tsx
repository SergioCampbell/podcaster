"use client";

import Loading from "@/components/Loading";
import { Filter } from "@/components/Podcast/Filter";
import { PodcastCards } from "@/components/Podcast/PodcastCards";
import { Navbar } from "@/components/navbar";
import { AllPodcasts, Podcasts } from "@/interface/podcasts";
import { Container, Stack, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [podcasts, setPodcasts] = useState<AllPodcasts>();
  const [totalPodcasts, setTotalPodcasts] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [searchQueary, setSearchQueary] = useState<string>("");

  /**
   * Fetches podcasts from the iTunes API and updates the state with the fetched data.
   *
   * @return {Promise<void>} - A promise that resolves once the data is fetched and the state is updated.
   */
  const fetchPodcasts = async () => {
    const res = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=6/json"
    );
    const data = await res.json();
    setPodcasts(data.feed.entry);
    setTotalPodcasts(data.feed.entry.length);
    setIsloading(!data);
  };

  /**
   * Filtering data with search queary and search queary in lower and upper case
   */
  const dataFiltered = podcasts?.filter((podcast: Podcasts) => {
    return (
      podcast?.["im:name"]?.label?.toLowerCase().includes(searchQueary) ||
      podcast?.["im:name"]?.label
        ?.toUpperCase()
        .includes(searchQueary.toUpperCase()) ||
      podcast?.["im:artist"]?.label?.toLowerCase().includes(searchQueary) ||
      podcast?.["im:artist"]?.label
        ?.toUpperCase()
        .includes(searchQueary.toUpperCase()) ||
      "".toLowerCase().includes(searchQueary.toLowerCase())
    );
  });

  useEffect(() => {
    fetchPodcasts();
    setSearchQueary(searchQueary);
    setIsloading(true);
  }, [searchQueary]);

  return (
    <main>
      <Navbar isloading={isLoading} />
      <Suspense fallback={<Loading />}>
        <Filter
          totalPodcasts={totalPodcasts}
          searchQueary={searchQueary}
          setSearchQueary={setSearchQueary}
        />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Stack
            direction="row"
            alignItems={"stretch"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            {dataFiltered !== undefined && dataFiltered?.length > 0 ? (
              <PodcastCards allPodcast={dataFiltered} loading={isLoading} />
            ) : (
              <Stack alignItems={"center"}>
                <Loading />
                <Typography variant="h4">No Podcast Found</Typography>
              </Stack>
            )}
          </Stack>
        </Container>
      </Suspense>
    </main>
  );
}
