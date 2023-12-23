const BASE_URL = "https://itunes.apple.com";

export const routes = {
  getPodcasts: (limit: number) =>
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${BASE_URL}/us/rss/toppodcasts/limit=${limit}/json`
    )}`,
  getPodcastDetail: (podcastId: string) =>
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${BASE_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`,
  getPodcastMedia: (episodeId: string) =>
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${BASE_URL}/lookup?id=${episodeId}&media=podcast&entity=podcastEpisode`
    )}`,
};
