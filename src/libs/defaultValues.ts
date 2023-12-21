import {
  Country,
  Kind,
  Name,
  PrimaryGenreNameEnum,
  Result,
  WrapperType,
} from "@/interface/podcastDetail";
import { Podcasts } from "@/interface/podcasts";

export const DEFAULT_VALUES: Result = {
  wrapperType: WrapperType.Track,
  kind: Kind.Podcast,
  artistId: 0,
  collectionId: 0,
  trackId: 0,
  artistName: "",
  collectionName: Name.SwitchedOnPop,
  trackName: Name.SwitchedOnPop,
  collectionCensoredName: Name.SwitchedOnPop,
  trackCensoredName: Name.SwitchedOnPop,
  artistViewUrl: "",
  collectionViewUrl: "",
  feedUrl: "",
  trackViewUrl: "",
  artworkUrl30: "",
  artworkUrl60: "",
  artworkUrl100: "",
  collectionPrice: 0,
  trackPrice: 0,
  collectionHdPrice: 0,
  releaseDate: "",
  collectionExplicitness: "",
  trackExplicitness: "",
  trackCount: 0,
  trackTimeMillis: 0,
  country: Country.Usa,
  currency: "",
  primaryGenreName: PrimaryGenreNameEnum.MusicCommentary,
  artworkUrl600: "",
  genreIds: [],
  genres: [],
};

export const DEFAULT_PODCAST_SIDEBAR: Podcasts = {
  "im:name": { label: "Demo demo demo" },
  "im:image": [
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/73/e4/8e/73e48e46-2812-f78f-e571-454e85b59be7/mza_4549916304669920567.jpg/55x55bb.png",
      attributes: { height: "55" },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/73/e4/8e/73e48e46-2812-f78f-e571-454e85b59be7/mza_4549916304669920567.jpg/60x60bb.png",
      attributes: { height: "60" },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/73/e4/8e/73e48e46-2812-f78f-e571-454e85b59be7/mza_4549916304669920567.jpg/170x170bb.png",
      attributes: { height: "170" },
    },
  ],
  summary: {
    label:
      "Dawn and Nick Hacheney are the perfect couple: spiritual, loving, and devoted to the church where Nick is a pastor. When Dawn is killed in a house fire the day after Christmas, the pastor and his flock are devastated. What few knew at the time was the dark prophecy that foretold it. The latest podcast from Dateline and Josh Mankiewicz is about sex, lies, religion… and murder.\n\nFollow now to get the latest episodes of ‘Mortal Sin’ completely free, or subscribe to Dateline Premium on Apple Podcasts for early access and ad-free listening: apple.co/datelinepremium",
  },
  "im:price": { label: "Get", attributes: { amount: "0", currency: "USD" } },
  "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
  rights: { label: "© 2023 NBCUniversal Media LLC, all rights reserved" },
  title: { label: "Mortal Sin - NBC News" },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://podcasts.apple.com/us/podcast/mortal-sin/id1718562878?uo=2",
    },
  },
  id: {
    label: "https://podcasts.apple.com/us/podcast/mortal-sin/id1718562878?uo=2",
    attributes: { "im:id": "1718562878" },
  },
  "im:artist": { label: "NBC News" },
  category: {
    attributes: {
      "im:id": "1488",
      term: "True Crime",
      scheme:
        "https://podcasts.apple.com/us/genre/podcasts-true-crime/id1488?uo=2",
      label: "True Crime",
    },
  },
  "im:releaseDate": {
    label: "2023-12-19T03:00:00-07:00",
    attributes: { label: "December 19, 2023" },
  },
};
