"use client";

import { Suspense, useMemo } from "react";
import { useQueryParams } from "@/app/hooks/useQueryParams";
import { useNewsFeed } from "../news-list/hooks/useNewsFeed";
import Container from "../../shared/container";
import { SearchPageHeader } from "./header";
import { SearchPageFilter } from "./filter";
import { SearchPageResults } from "./results";
import { SearchPageEmpty } from "./empty";

export default function SearchPageContent() {
  const { getParam, setParam } = useQueryParams();
  const query = getParam("query") || "";

  const category = getParam("category") || "همه";
  const dateFilter =
    (getParam("date") as "all" | "today" | "week" | "month") || "all";
  const sort = getParam("sort") || "latest";

  const filters = useMemo(
    () => ({ search: query, category, dateFilter, sort }),
    [query, category, dateFilter, sort]
  );

  const { articles, total } = useNewsFeed(filters);

  return (
    <>
    <Suspense fallback={'loading'}>

      <SearchPageHeader query={query} total={total} />
      <Container>
        {query && (
          <SearchPageFilter
            category={category}
            setCategory={(val) => setParam("category", val)}
            dateFilter={dateFilter}
            setDateFilter={(val) => setParam("date", val)}
            sort={sort}
            setSort={(val) => setParam("sort", val)}
          />
        )}

        {articles.length > 0 ? (
          <SearchPageResults articles={articles} query={query} />
        ) : (
          <SearchPageEmpty query={query} />
        )}
      </Container>
          </Suspense>
    </>
  );
}
