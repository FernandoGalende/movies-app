import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Search } from ".";
import * as moviesApi from "@/api/movies";

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
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(screen.getByText(/Movie Search/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("id", "movie-search");
    expect(input).toHaveAttribute("aria-describedby", "search-description");

    expect(screen.getByText(/Start typing to search/i)).toBeInTheDocument();
  });

  it("should call API when typing in search input", async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Type to search movies.../i);
    fireEvent.change(input, { target: { value: "The Matrix" } });

    await waitFor(() => {
      expect(moviesApi.getMovies).toHaveBeenCalledWith({
        query: "The Matrix",
        page: 1,
      });
    });
  });
});
