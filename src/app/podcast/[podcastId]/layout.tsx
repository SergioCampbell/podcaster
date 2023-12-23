"use client";

import Loading from "@/components/Loading";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/navbar";
import { usePodcastForSidebar } from "@/hooks";
import { Podcasts } from "@/interface/podcasts";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { ReactNode, Suspense, useEffect, useState } from "react";

export default function PodcastLayout({ children }: { children: ReactNode }) {
  const { podcastId } = useParams();
  const { data, isFetching } = usePodcastForSidebar(String(podcastId));
  const [podcastSidebar, setPodcastSidebar] = useState<Podcasts>();

  const myWidht = window.innerWidth;

  useEffect(() => {
    if (data && "im:name" in data) {
      setPodcastSidebar(data);
    }
  }, [data, myWidht]);
  return (
    <section>
      <Navbar isloading={isFetching} />
      <Suspense fallback={<Loading />}>
        <Stack direction={myWidht < 800 ? "column" : "row"}>
          <Sidebar podcast={podcastSidebar} />
          {children}
        </Stack>
      </Suspense>
    </section>
  );
}
