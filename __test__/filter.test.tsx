import { render, screen } from "@testing-library/react";
import { Filter } from "@/components/Podcast/Filter";

describe("Filter", () => {
  it("should render correctly", () => {
    expect(true).toBeTruthy();
  });
  it("should be a search input", () => {
    render(
      <Filter searchQueary={""} setSearchQueary={() => {}} totalPodcasts={0} />
    );
    const totalPodcasts = screen.getByTestId("search-podcast");
    expect(totalPodcasts).toBeInTheDocument();
  });
});
