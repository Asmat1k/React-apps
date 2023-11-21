import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ComType, PostType } from '../types/api';
import { changeLoading } from '../../app/appSlice';

export const jsonApi = createApi({
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
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        dispatch(changeLoading());
        await queryFulfilled;
        dispatch(changeLoading());
      },
    }),
    getOnePost: build.query<PostType, string>({
      query: (id = '1') => ({
        url: `/posts/${id}`,
      }),
    }),
    // ---------------------------
    getCommentsForPost: build.query<ComType[], string>({
      query: (id = '0') => ({
        url: `/post/${id}/comments`,
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetOnePostQuery,
  useGetCommentsForPostQuery,
} = jsonApi;
