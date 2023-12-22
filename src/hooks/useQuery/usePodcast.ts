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

/**
 * Returns a query for podcast data based on the specified limit.
 *
 * @param {number} limit - The maximum number of podcast records to retrieve.
 * @return {unknown} - The result of the query for podcast data.
 */
const usePodcast = (limit: number) => {
  return useQuery({
    queryKey: ["podcasts", limit],
    queryFn: () => fetchPodcasts(limit),
    enabled: limit > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

/**
 * Custom hook for retrieving podcast details based on the provided podcast ID.
 *
 * @param {string} podcastId - The ID of the podcast to retrieve details for.
 * @return {unknown} The result of the useQuery hook, which retrieves the podcast details.
 */
const usePodcastDetail = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcastDetail", podcastId],
    queryFn: () => fetchPodcastDetail(podcastId),
    enabled: podcastId.length > 0,
  });
};

/**
 * Custom hook that fetches the details of a podcast.
 *
 * @param {string} podcastId - The ID of the podcast.
 * @return {Object} - The result of the query, containing the podcast details.
 */
const usePodcastForSidebar = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcastForSidebar", podcastId],
    queryFn: () => fetchPodcastsSidebar(podcastId),
  });
};

/**
 * Custom hook for fetching podcast media based on the provided parameters.
 *
 * @param {PropParams} params - The parameters for fetching podcast media.
 * The `podcastId` and `episodeId` properties are required.
 * @return {QueryResult} - The result of the query for podcast media.
 */
const usePodcastMedia = (params: PropParams) => {
  return useQuery({
    queryKey: [`podcastMedia-${params.podcastId}`, params.episodeId],
    queryFn: () => fetchPodcastMedia(params),
    enabled: Boolean(params),
    refetchOnMount: true,
  });
};

export { usePodcast, usePodcastDetail, usePodcastForSidebar, usePodcastMedia };
