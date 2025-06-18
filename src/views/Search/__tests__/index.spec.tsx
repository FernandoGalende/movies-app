import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { Search } from "..";
import * as moviesApi from "@/api/movies";
import type { LinkProps } from "react-router";
import { SearchProvider } from "../../../context";

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
  getFavMovies: vi.fn().mockResolvedValue({
    page: "1",
    results: [],
    total_pages: 1,
    total_results: 0,
  }),
}));

const renderWithProviders = (ui: React.ReactNode) => {
  return render(ui, {
    wrapper: ({ children }) => <SearchProvider>{children}</SearchProvider>,
  });
};

describe("Search page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render search form correctly", async () => {
    await act(async () => {
      renderWithProviders(<Search />);
    });

    expect(screen.getByText(/Movie Search/i)).toBeVisible();
    expect(
      screen.getByPlaceholderText(/Type to search movies.../i)
    ).toBeVisible();
    expect(screen.getByText(/Favorite movies/i)).toBeVisible();
  });

  test("should call API when typing in search input", async () => {
    await act(async () => {
      renderWithProviders(<Search />);
    });

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    await act(async () => {
      fireEvent.change(input, { target: { value: "The Matrix" } });
    });

    await waitFor(() => {
      expect(moviesApi.getMovies).toHaveBeenCalledWith({
        query: "The Matrix",
        page: 1,
      });
    });
  });

  test("should render loading state when typing in search input 3 characters", async () => {
    // Mock getMovies to return a promise that never resolves (keeps loading state)
    vi.mocked(moviesApi.getMovies).mockImplementation(() => {
      return new Promise(() => {
        // This promise never resolves, keeping the loading state
      });
    });

    await act(async () => {
      renderWithProviders(<Search />);
    });

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    await act(async () => {
      fireEvent.change(input, { target: { value: "The" } });
    });

    // Wait for loading state
    await waitFor(
      () => {
        expect(screen.getByText(/Loading movies.../i)).toBeVisible();
      },
      { timeout: 1000 }
    );
  });

  test("should show proper initial state message", async () => {
    await act(async () => {
      renderWithProviders(<Search />);
    });

    expect(screen.getByText(/Favorite movies/i)).toBeVisible();
  });

  test("should show search results with count and pagination info", async () => {
    const mockResults = {
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
    };

    vi.mocked(moviesApi.getMovies).mockResolvedValue(mockResults);

    await act(async () => {
      renderWithProviders(<Search />);
    });

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    await act(async () => {
      fireEvent.change(input, { target: { value: "Matrix" } });
    });

    // Wait for all assertions in a single waitFor
    await waitFor(
      () => {
        expect(screen.getByText(/Found 6 results for "Matrix"/i)).toBeVisible();
        expect(screen.getByText("The Matrix")).toBeVisible();
        expect(screen.getByText("The Matrix Reloaded")).toBeVisible();

        const matrixCards = screen.getAllByRole("link", {
          name: /View details for The Matrix/i,
        });
        expect(matrixCards[0]).toBeVisible();
        expect(matrixCards[0]).toHaveAttribute(
          "aria-label",
          "View details for The Matrix (1999). Rating: 8.7 out of 10."
        );
        expect(matrixCards[0]).toHaveAttribute(
          "aria-describedby",
          "movie-1-overview"
        );
      },
      { timeout: 1000 }
    );
  });
});
