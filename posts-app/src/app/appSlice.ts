import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  name: string;
  isLogged: boolean;
}
interface PaginationState {
  isPagLoading: boolean;
  startPageFrom: number;
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
    startPageFrom: 0,
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
      state.pagination.startPageFrom = 5 * (action.payload - 1);
    },
  },
});

export const { changeLoading, changeIsLogged } = dataSlice.actions;

export default dataSlice.reducer;
