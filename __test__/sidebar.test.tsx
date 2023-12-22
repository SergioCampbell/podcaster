import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "../src/components/Sidebar";
import {allPodcast} from "../db/allPodcast";

describe("Should display the Sidebar", () => {
  it("renders the Sidebar", () => {
    render(<Sidebar podcast={allPodcast[1]} />);
    const summary = screen.getByTestId("podcast-artist");

    expect(summary).toBeInTheDocument();
  });
});
