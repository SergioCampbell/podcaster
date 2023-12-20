export type AllPodcasts = Podcasts[];
export type Podcasts = {
  "im:name"?: IMName;
  "im:image"?: IMImage[];
  summary?: IMName;
  "im:price"?: IMPrice;
  "im:contentType"?: IMContentType;
  rights?: IMName;
  title?: IMName;
  link?: Link;
  id?: ID;
  "im:artist"?: IMArtist;
  category?: Category;
  "im:releaseDate"?: IMReleaseDate;
};

export type Category = {
  attributes?: CategoryAttributes;
};

export type CategoryAttributes = {
  "im:id"?: string;
  term?: string;
  scheme?: string;
  label?: string;
};

export type ID = {
  label?: string;
  attributes?: IDAttributes;
};

export type IDAttributes = {
  "im:id"?: string;
};

export type IMArtist = {
  label?: string;
  attributes?: IMArtistAttributes;
};

export type IMArtistAttributes = {
  href?: string;
};

export type IMContentType = {
  attributes?: IMContentTypeAttributes;
};

export type IMContentTypeAttributes = {
  term?: string;
  label?: string;
};

export type IMImage = {
  label?: string;
  attributes?: IMImageAttributes;
};

export type IMImageAttributes = {
  height?: string;
};

export type IMName = {
  label?: string;
};

export type IMPrice = {
  label?: string;
  attributes?: IMPriceAttributes;
};

export type IMPriceAttributes = {
  amount?: string;
  currency?: string;
};

export type IMReleaseDate = {
  label?: string;
  attributes?: IMName;
};

export type Link = {
  attributes?: LinkAttributes;
};

export type LinkAttributes = {
  rel?: string;
  type?: string;
  href?: string;
};
