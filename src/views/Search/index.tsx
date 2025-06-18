import { SearchHeader, SearchForm, SearchResults } from "./components";
import { SearchContainer } from "./components/SearchContainer";
import { Paginator } from "@/components";
import { useSearch } from "@/context";

import { styles } from "./styles";

export function Search() {
  const {
    query,
    setQuery,
    movies,
    page,
    setPage,
    totalPages,
    showPagination,
    loading,
    debouncingQuery,
  } = useSearch();

  const handleOnQueryChange = (query: string) => {
    setPage(1);
    setQuery(query);
  };

  const headerContent = (
    <>
      <SearchHeader />
      <SearchForm query={query} onQueryChange={handleOnQueryChange} />
    </>
  );

  const mainContent = (
    <>
      <SearchResults
        movies={movies}
        count={movies.length * totalPages}
        query={query}
        page={page}
        totalPages={totalPages}
        loading={loading}
        debouncingQuery={debouncingQuery}>
        {showPagination && (
          <div className={styles.pagination}>
            <Paginator current={page} total={totalPages} onChange={setPage} />
          </div>
        )}
      </SearchResults>
    </>
  );

  return <SearchContainer header={headerContent} main={mainContent} />;
}
