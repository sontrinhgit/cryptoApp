import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { REACT_APP_API_KEY_NEWS } from "../ApiKey";

const crytoNewHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": REACT_APP_API_KEY_NEWS,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: crytoNewHeaders,
});

export const cryptoNew = createApi({
  reducerPath: "cryptoNew",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetNewsQuery } = cryptoNew;
