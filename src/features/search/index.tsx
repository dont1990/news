"use client";

import { useMemo } from "react";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useNewsFeed } from "../news/hooks/useNewsFeed";
import Container from "../../components/shared/container";
import { SearchPageFilter } from "./components/filter";
import { SearchPageResults } from "./components/results";
import { SearchPageEmpty } from "./components/empty";
import { PageHeader } from "../../components/shared/page-header";
import SearchIcon from "@/assets/shared-icons/search";

export default function SearchPageContent() {
  const { getParam, setParam } = useQueryParams();
  const query = getParam("query") || "";

  const category = getParam("category") || "همه";
  const dateFilter =
    (getParam("date") as "all" | "today" | "week" | "month") || "all";
  const sort = getParam("sort") || "latest";

  // ✅ parse tags from query param
  const tags = (getParam("tags")?.split(",") || []).filter(Boolean);

  const filters = useMemo(
    () => ({ search: query, category, dateFilter, sort, tags }),
    [query, category, dateFilter, sort, tags]
  );

  const { articles, total, ref, isFetchingNextPage } = useNewsFeed(filters);

  return (
    <>
      <PageHeader
        title={query ? `نتایج برای "${query}"` : "جستجوی اخبار"}
        subtitle={
          query
            ? `${total} مقاله یافت شد که با جستجوی شما مطابقت دارد`
            : undefined
        }
        icon={<SearchIcon className="h-6 w-6 text-primary" />}
        badgeText="نتایج جستجو"
        badgeCount={total}
      />
      <Container>
        <SearchPageFilter
          category={category}
          setCategory={(val) => setParam("category", val)}
          dateFilter={dateFilter}
          setDateFilter={(val) => setParam("date", val)}
          sort={sort}
          setSort={(val) => setParam("sort", val)}
          tags={tags}
          setTags={(newTags) =>
            setParam("tags", newTags.length ? newTags.join(",") : null)
          }
        />

        {articles.length > 0 ? (
          <SearchPageResults
            articles={articles}
            query={query}
            infiniteScrollRef={ref}
            isFetchingNextPage={isFetchingNextPage}
          />
        ) : (
          <SearchPageEmpty query={query} />
        )}
      </Container>
    </>
  );
}
