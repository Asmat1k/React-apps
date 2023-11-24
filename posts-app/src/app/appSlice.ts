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

function getItemFromKey(itemName) {
  const jsonStr = localStorage.getItem('isLogged');
  if (jsonStr) {
    return JSON.parse(jsonStr)[itemName];
  }
  return '-';
}

const initialState: defaultState = {
  user: {
    email: getItemFromKey('email'),
    name: getItemFromKey('name'),
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
    changeEmail(state, action) {
      state.user.email = action.payload;
    },
    changeName(state, action) {
      state.user.name = action.payload;
    },
    changeIsLogged(state) {
      state.user.isLogged = !state.user.isLogged;
    },
    //----------------------
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

export const {
  changeEmail,
  changeName,
  changeLoading,
  changeIsLogged,
  changeCommentsPage,
  changePage,
} = dataSlice.actions;

export default dataSlice.reducer;
