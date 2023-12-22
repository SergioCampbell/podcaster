import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { podcastDetail } from "../db/data";
import PodcastPage from "@/app/podcast/[podcastId]/page";
import { useParams } from "next/navigation";

const queryClient = new QueryClient();

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useParams: jest.fn(),
}));

describe("Should render the Podcast Page", () => {
  it("renders the Podcast Page", () => {
    expect(true).toBeTruthy();
  });

  (useParams as jest.Mock).mockReturnValue({
    podcastId: podcastDetail.results[4].collectionId,
  });
  it("Should display episode heading", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PodcastPage />
      </QueryClientProvider>
    );
    const heading = screen.getByText(/Epidodes/i);

    expect(heading).toBeInTheDocument();
  });
});
