import { SearchHeader, SearchForm, SearchResults } from "./components";
import { SearchContainer } from "./components/SearchContainer";
import { Paginator } from "@/components";
import { useSearch } from "./hooks/useSearch";

export function Search() {
  const {
    query,
    setQuery,
    movies,
    loading,
    page,
    setPage,
    totalPages,
    handleClear,
    isEmptySearch,
    showPagination,
  } = useSearch();

  const headerContent = (
    <>
      <SearchHeader loading={loading} isEmptySearch={isEmptySearch} />
      <SearchForm
        query={query}
        onQueryChange={setQuery}
        onClear={handleClear}
        loading={loading}
      />
    </>
  );

  const mainContent = (
    <>
      {showPagination && (
        <Paginator page={page} totalPages={totalPages} setPage={setPage} />
      )}
      <SearchResults movies={movies} />
    </>
  );

  return <SearchContainer header={headerContent} main={mainContent} />;
}
