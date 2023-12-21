const BASE_URL = "https://itunes.apple.com";

export const routes = {
  getPodcasts: (limit: number) => `${BASE_URL}/us/rss/toppodcasts/limit=${limit}/json`,
  getPodcastDetail: (podcastId: string) =>
    `${BASE_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
};
