export interface PodcastDetail {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: GenreElement[];
  episodeUrl?: string;
  closedCaptioning?: string;
  artistIds?: number[];
  episodeGuid?: string;
  shortDescription?: string;
  previewUrl?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  description?: string;
  contentAdvisoryRating?: string;
}

export type GenreElement = GenreClass | string;

export interface GenreClass {
  name: string;
  id: string;
}

