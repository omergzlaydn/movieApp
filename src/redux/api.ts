import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { detailType, bodyType, resType } from "../types";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('content-type', 'application/json');
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_API_AUTH}`);
      return headers;
    }
  }),

  tagTypes: ["Movies", "Favorites"],

  endpoints: (builder) => ({
    getMovies: builder.query<resType, string>({
      query: (url) => url,
    }),

    getDetail: builder.query<detailType, string | undefined>({
      query: (id) => `/movie/${id}`,
    }),

    addToFavorite: builder.mutation<string, bodyType>({
      query: (body: bodyType) => ({
        url: "/account/19719088/favorite",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["Favorites"],
    }),

    getFavorites: builder.query<resType, void>({
      query: () => "/account/19719088/favorite/movies",
      providesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
  useGetDetailQuery,
} = api;
