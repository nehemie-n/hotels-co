import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: "/",
}));

/**
 * Render the page first
 */

describe("Home", () => {
  /**
   * Render the heading
   */
  it("renders a heading", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );
    const heading = screen.getByRole("heading", {
      name: /Want a place to stay/i,
    });
    expect(heading).toBeInTheDocument();
  });
  /**
   * Contains the search input
   */
  it("contains the search input", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );
    const homeSearch = screen.getByTestId("HomeSearch").querySelector("input");
    expect(homeSearch).toBeDefined();
  });
  /**
   * Contains the HomeRooms
   */
  it("contains the home rooms", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );
    const homeRooms = screen.getByTestId("HomeRooms");
    expect(homeRooms).toBeInTheDocument();
  });
});
