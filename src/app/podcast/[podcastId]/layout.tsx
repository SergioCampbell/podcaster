"use client";

import Loading from "@/components/Loading";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/navbar";
import { usePodcastForSidebar } from "@/hooks";
import { Result } from "@/interface/podcastDetail";
import { Podcasts } from "@/interface/podcasts";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { podcastId } = useParams();
  const { data, isFetching } = usePodcastForSidebar(String(podcastId));
  const [podcastSidebar, setPodcastSidebar] = useState<any>();
  useEffect(() => {
    if (!data) return;
    setPodcastSidebar(data);
  }, [data]);
  return (
    <section>
      <Navbar isloading={isFetching} />
      <Suspense fallback={<Loading />}>
        <Stack direction="row">
          <Sidebar podcast={podcastSidebar} />
          {children}
        </Stack>
      </Suspense>
    </section>
  );
}
