import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../src/components/navbar";

describe("Should render the Navbar", () => {
  it("renders the Podcaster header", () => {
    render(<Navbar isloading={false} />);
    const heading = screen.getByTestId("navbar");

    expect(heading).toBeInTheDocument();
  });
});
