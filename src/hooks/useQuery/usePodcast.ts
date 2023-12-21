"use client";
import { AllPodcasts, Podcasts } from "@/interface/podcasts";
import { routes } from "@/libs/apiUrl";
import { useQuery } from "@tanstack/react-query";

const fetchPodcasts = async (limit: number) => {
  try {
    const res = await fetch(routes.getPodcasts(limit));
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    const results: AllPodcasts = data.feed.entry;
    return results;
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return [];
  }
};

const usePodcast = (limit: number) => {
  return useQuery({
    queryKey: ["podcasts", limit],
    queryFn: () => fetchPodcasts(limit),
    enabled: limit > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

const fetchPodcastDetail = async (podcastId: string) => {
  try {
    const res = await fetch(routes.getPodcastDetail(podcastId));
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching podcast detail:", error);
    return [];
  }
};

const usePodcastDetail = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcastDetail", podcastId],
    queryFn: () => fetchPodcastDetail(podcastId),
    enabled: podcastId.length > 0,
  });
};

const fetchPodcastsSidebar = async (podcastId: string) => {
  try {
    const res = await fetch(routes.getPodcasts(100));
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    const result: Podcasts[] = data.feed.entry;
    let algo: Podcasts = {};
    for (algo of result) {
      if (algo?.id?.attributes?.["im:id"] === podcastId) {
        return algo;
      }
    }
  } catch (error) {
    console.error("🚨 Error fetching podcasts:", error);
    return [];
  }
};

const usePodcastForSidebar = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcastForSidebar", podcastId],
    queryFn: () => fetchPodcastsSidebar(podcastId),
  });
};

export {
  usePodcast,
  fetchPodcasts,
  fetchPodcastDetail,
  usePodcastDetail,
  usePodcastForSidebar,
};
