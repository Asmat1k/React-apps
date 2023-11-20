import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostType } from '../types/api';

export const comApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    getAllComments: build.query<PostType[], string>({
      query: (start = '0', limit = '5') => ({
        url: '/com',
        params: {
          _start: start,
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetAllCommentsQuery } = comApi;
