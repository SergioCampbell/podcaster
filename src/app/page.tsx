"use client";

import Loading from "@/components/Loading";
import { PodcastCards } from "@/components/Podcast/PodcastCards";
import { Navbar } from "@/components/navbar";
import { AllPodcasts } from "@/interface/podcasts";
import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [podcasts, setPodcasts] = useState<AllPodcasts>();

  const fetchPodcasts = async () => {
    const res = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=10/json"
    );
    const data = await res.json();
    setPodcasts(data.feed.entry);
  };

  const one = 1;

  // console.log("🚀 ~ file: page.tsx:12 ~ Home ~ podcasts:", podcasts?.map((item) => {
  //   return item?.id?.attributes?.["im:id"]
  // }));
  useEffect(() => {
    fetchPodcasts();
  }, []);

  return (
    <main>
      <Navbar />
      <input placeholder="Filter Podcast..." />
      <Suspense fallback={<Loading />}>
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Stack
            direction="row"
            alignItems={"stretch"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <PodcastCards />
          </Stack>
          {/* <Button variant="contained">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          href={`/podcast/${one}`}
        >
          Open all Podcast
        </Link>
      </Button> */}
        </Container>
      </Suspense>
    </main>
  );
}
