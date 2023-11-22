import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  name: string;
  isLogged: boolean;
}
interface PaginationState {
  isPagLoading: boolean;
  startPostsPageFrom: number;
  startComPageFrom: number;
}

interface defaultState {
  user: UserState;
  pagination: PaginationState;
}

const initialState: defaultState = {
  user: {
    email: '',
    name: '',
    isLogged: !!localStorage.getItem('isLogged') ?? false,
  },
  pagination: {
    isPagLoading: false,
    startPostsPageFrom: 0,
    startComPageFrom: 0,
  },
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeIsLogged(state) {
      state.user.isLogged = !state.user.isLogged;
    },
    changeLoading(state) {
      state.pagination.isPagLoading = !state.pagination.isPagLoading;
    },
    changePage(state, action) {
      state.pagination.startPostsPageFrom = 5 * (action.payload - 1);
    },
    changeCommentsPage(state, action) {
      state.pagination.startComPageFrom = action.payload - 1;
    },
  },
});

export const { changeLoading, changeIsLogged, changeCommentsPage, changePage } =
  dataSlice.actions;

export default dataSlice.reducer;
