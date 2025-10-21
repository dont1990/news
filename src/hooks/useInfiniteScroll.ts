import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type InfiniteScrollOptions = {
  hasNextPage?: boolean;
  fetchNextPage: () => void;
};

export function useInfiniteScroll({ hasNextPage, fetchNextPage }: InfiniteScrollOptions) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return { ref };
}
