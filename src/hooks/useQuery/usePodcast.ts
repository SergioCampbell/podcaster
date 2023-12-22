"use client";

import {
  fetchPodcasts,
  fetchPodcastDetail,
  fetchPodcastsSidebar,
  fetchPodcastMedia,
} from "@/services/serviceFetcher";
import { useQuery } from "@tanstack/react-query";

interface PropParams {
  podcastId: string;
  episodeId: string;
}

const usePodcast = (limit: number) => {
  return useQuery({
    queryKey: ["podcasts", limit],
    queryFn: () => fetchPodcasts(limit),
    enabled: limit > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

const usePodcastDetail = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcastDetail", podcastId],
    queryFn: () => fetchPodcastDetail(podcastId),
    enabled: podcastId.length > 0,
  });
};

const usePodcastForSidebar = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcastForSidebar", podcastId],
    queryFn: () => fetchPodcastsSidebar(podcastId),
  });
};

const usePodcastMedia = (params: PropParams) => {
  return useQuery({
    queryKey: [`podcastMedia-${params.podcastId}`, params.episodeId],
    queryFn: () => fetchPodcastMedia(params),
    enabled: Boolean(params),
    refetchOnMount: true,
  });
};

export { usePodcast, usePodcastDetail, usePodcastForSidebar, usePodcastMedia };
