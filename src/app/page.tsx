"use client";

import Loading from "@/components/Loading";
import { Filter } from "@/components/Podcast/Filter";
import { PodcastCards } from "@/components/Podcast/PodcastCards";
import { Navbar } from "@/components/navbar";
import { AllPodcasts } from "@/interface/podcasts";
import { Container, Stack, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [podcasts, setPodcasts] = useState<AllPodcasts>();
  const [totalPodcasts, setTotalPodcasts] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [searchQueary, setSearchQueary] = useState<string>("");

  const fetchPodcasts = async () => {
    const res = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=6/json"
    );
    const data = await res.json();
    console.log("🚀 ~ file: page.tsx:21 ~ fetchPodcasts ~ data:", data);
    setPodcasts(data.feed.entry);
    setTotalPodcasts(data.feed.entry.length);
    setIsloading(!data);
  };

  const handlePodcast = () => {
    setIsloading(true);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

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
            {podcasts !== undefined && podcasts?.length > 0 ? (
              <PodcastCards
                allPodcast={podcasts}
                hadlePodcast={handlePodcast}
                loading={isLoading}
              />
            ) : (
              <Typography variant="h4">No Podcast Found</Typography>
            )}
          </Stack>
        </Container>
      </Suspense>
    </main>
  );
}
