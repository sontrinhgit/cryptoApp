import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const crytoNewHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": '0ce1cc8e47mshdf026eb9e4e85a5p1de129jsn13fe8ffacedd',
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
