"use client";

import { Navbar } from "@/components/navbar";
import { Podcasts } from "@/interface/podcasts";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const randomId = Math.floor(Math.random() * 1000);
  const [podcasts, setPodcasts] = useState<Podcasts>();

  const fetchPodcasts = async () => {
    const res = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/json"
    );
    const data = await res.json();
    setPodcasts(data.feed.entry);
  };

  // console.log("🚀 ~ file: page.tsx:12 ~ Home ~ podcasts:", podcasts);
  useEffect(() => {
    fetchPodcasts();
  }, []);

  return (
    <main>
      <Navbar />
      <input placeholder="Filter Podcast..." />
      <h1>Podcasts</h1>
      <Button variant="contained">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          href={`/podcast/${randomId}`}
        >
          Open all Podcast
        </Link>
      </Button>
    </main>
  );
}
