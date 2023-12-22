import { PodcastDetail, Result } from "@/interface/podcastDetail";
import { AllPodcasts, Podcasts } from "@/interface/podcasts";
import { routes } from "@/libs/apiUrl";

//

interface PropParams {
  podcastId: string;
  episodeId: string;
}

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

const fetchPodcastDetail = async (podcastId: string) => {
  try {
    const res = await fetch(routes.getPodcastDetail(podcastId));
    const data: PodcastDetail = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching podcast detail:", error);
    return [];
  }
};
const fetchPodcastMedia = async (params: PropParams) => {
  try {
    const res = await fetch(routes.getPodcastMedia(params.podcastId));
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const fromPodcast: PodcastDetail = await res.json();
    const podcastData: Result[] = fromPodcast.results;

    let algo: any = {};
    for (algo of podcastData) {
      if (algo?.trackId === Number(params.episodeId)) {
        return algo;
      }
    }
  } catch (error) {
    console.error("🚨 Error fetching episode detail:", error);
    return [];
  }
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

export {
  fetchPodcasts,
  fetchPodcastDetail,
  fetchPodcastMedia,
  fetchPodcastsSidebar,
};
