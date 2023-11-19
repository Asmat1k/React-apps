import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostType } from '../types/api';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    getAllPosts: build.query<PostType[], string>({
      query: (start = '0', limit = '5') => ({
        url: '/posts',
        params: {
          _start: start,
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
