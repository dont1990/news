export const routes = {
  // 🏠 Home
  home: {
    getHref: () => "/",
  },

  // 📰 News
  news: {
    // list page with optional filters
    getHref: (params?: {
      category?: string;
      search?: string;
      sort?: string;
      dateFilter?: string;
      page?: number;
    }) => {
      const url = new URL("/news", "http://dummy"); // base dummy URL

      if (params?.category)
        url.searchParams.append("category", params.category); // remove encodeURIComponent
      if (params?.search) url.searchParams.append("search", params.search);
      if (params?.sort) url.searchParams.append("sort", params.sort);
      if (params?.dateFilter)
        url.searchParams.append("dateFilter", params.dateFilter);
      if (params?.page) url.searchParams.append("page", String(params.page));
      if (params?.page) url.searchParams.append("page", String(params.page));

      return url.pathname + url.search;
    },

    // detail page
    detail: {
      getHref: (id: number | string) => `/news/${id}`,
    },
  },

  // Search
  search: {
    // list page with optional filters
    getHref: (params?: { query?: string; sort?: string; page?: number }) => {
      const url = new URL("/search", "http://dummy"); // base dummy URL

      if (params?.query) url.searchParams.append("query", params.query);
      if (params?.sort) url.searchParams.append("sort", params.sort);
      if (params?.page) url.searchParams.append("page", String(params.page));

      return url.pathname + url.search;
    },
  },

  newspaper: {
    getHref: () => "/newspaper",
  },
};
