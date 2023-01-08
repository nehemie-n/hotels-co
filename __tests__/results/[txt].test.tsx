import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ResultsPage from "../../pages/results/[txt]";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: "/",
}));

/**
 * Render the page first
 */

describe("ResultsPage", () => {
  /**
   * Contains the search input
   */
  it("contains search input", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <ResultsPage />
      </QueryClientProvider>
    );
    const searchInput = screen
      .getByTestId("SearchInput")
      .querySelector("input");
    expect(searchInput).toBeDefined();
  });
  /**
   * Contains the results section
   */
  it("contains the results section", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <ResultsPage />
      </QueryClientProvider>
    );
    const resultsSection = screen.getByTestId("ResultsSection");
    expect(resultsSection).toBeDefined();
  });
});
