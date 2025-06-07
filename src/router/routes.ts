import * as views from "@/views";

import { MOVIES_SEARCH, MOVIE_DETAIL } from "./paths";

const Search = {
  Component: views.Search,
  path: MOVIES_SEARCH,
};

const Detail = {
  Component: views.Detail,
  path: MOVIE_DETAIL,
};

const routes = [Search, Detail];

export default routes;
