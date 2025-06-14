import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Search } from "..";
import * as moviesApi from "@/api/movies";
import type { Movie } from "@/types";
import type { LinkProps } from "react-router";

// Import the type for proper TypeScript typing
type GetMoviesResponse = {
  page: string;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock react-router Link component
vi.mock("react-router", () => ({
  Link: ({ children, to, ...props }: LinkProps) => (
    <a href={to as string} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/api/movies", () => ({
  getMovies: vi.fn().mockResolvedValue({
    page: "1",
    results: [],
    total_pages: 1,
    total_results: 0,
  }),
}));

describe("Search page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render search form correctly", () => {
    render(<Search />);

    expect(screen.getByText(/Movie Search/i)).toBeVisible();

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("id", "movie-search");
    expect(input).toHaveAttribute("aria-describedby", "search-description");

    expect(
      screen.getByText(/Start typing to search for movies/i)
    ).toBeVisible();
  });

  it("should call API when typing in search input", async () => {
    render(<Search />);

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    fireEvent.change(input, { target: { value: "The Matrix" } });

    await waitFor(() => {
      expect(moviesApi.getMovies).toHaveBeenCalledWith({
        query: "The Matrix",
        page: 1,
      });
    });
  });

  it("should render loading state when typing in search input 3 characters", async () => {
    // Create a promise that doesn't resolve immediately to simulate loading
    let resolvePromise: (value: GetMoviesResponse) => void;
    const pendingPromise = new Promise<GetMoviesResponse>((resolve) => {
      resolvePromise = resolve;
    });

    // Mock the API to return a pending promise
    vi.mocked(moviesApi.getMovies).mockReturnValue(pendingPromise);

    render(<Search />);

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    fireEvent.change(input, { target: { value: "The" } });

    // Wait for the debounced call to trigger (500ms + a bit extra)
    await waitFor(
      () => {
        expect(screen.getByText(/Loading movies.../i)).toBeVisible();
      },
      { timeout: 1000 }
    );

    // Clean up: resolve the promise to avoid hanging tests
    resolvePromise!({
      page: "1",
      results: [],
      total_pages: 1,
      total_results: 0,
    });
  });

  it("should show proper initial state message", () => {
    render(<Search />);

    expect(
      screen.getByText(/Start typing to search for movies/i)
    ).toBeVisible();
  });

  it("should show search results with count and pagination info", async () => {
    // Mock API to return some movie results
    vi.mocked(moviesApi.getMovies).mockResolvedValue({
      page: "1",
      results: [
        {
          id: 1,
          title: "The Matrix",
          overview:
            "A computer hacker learns about the true nature of reality.",
          poster_path: "/poster1.jpg",
          release_date: "1999-03-31",
          vote_average: 8.7,
          vote_count: 1000,
          original_language: "en",
          original_title: "The Matrix",
          popularity: 100,
          video: false,
        },
        {
          id: 2,
          title: "The Matrix Reloaded",
          overview: "Neo and his allies race against time.",
          poster_path: "/poster2.jpg",
          release_date: "2003-05-15",
          vote_average: 7.2,
          vote_count: 800,
          original_language: "en",
          original_title: "The Matrix Reloaded",
          popularity: 90,
          video: false,
        },
      ],
      total_pages: 3,
      total_results: 50,
    });

    render(<Search />);

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    fireEvent.change(input, { target: { value: "Matrix" } });

    // Wait for the API call to complete and results to display
    await waitFor(() => {
      expect(screen.getByText(/Found 6 results for "Matrix"/i)).toBeVisible();
    });

    // Check that pagination info is displayed (target the visible element, not the sr-only one)
    const paginationElements = screen.getAllByText(/Page 1 of 3/i);
    const visiblePaginationElement = paginationElements.find(
      (el) => !el.classList.contains("sr-only")
    );
    expect(visiblePaginationElement).toBeVisible();

    // Check that movie results are displayed
    expect(screen.getByText("The Matrix")).toBeVisible();
    expect(screen.getByText("The Matrix Reloaded")).toBeVisible();

    // Check that movie details are accessible
    const matrixCards = screen.getAllByRole("link", {
      name: /View details for The Matrix/i,
    });
    expect(matrixCards[0]).toBeVisible();
    expect(matrixCards[0]).toHaveAttribute(
      "aria-label",
      "View details for The Matrix (1999). Rating: 8.7 out of 10."
    );

    // Check that movie details are accessible
    expect(matrixCards[0]).toHaveAttribute(
      "aria-describedby",
      "movie-1-overview"
    );
  });
});
