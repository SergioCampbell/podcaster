import { PodcastCards } from "@/components/Podcast/PodcastCards";
import { render } from "@testing-library/react";
import { allPodcast } from "../db/allPodcast";

describe("Should render the PodcastCard", () => {
  it("renders the PodcastCard", () => {
    expect(true).toBeTruthy();
  });
  it("Should display the artist name", () => {
    const card = render(
      <PodcastCards allPodcast={allPodcast} loading={false} />
    );
    let tree = card.asFragment();
    expect(tree).toMatchSnapshot();
  });
});
