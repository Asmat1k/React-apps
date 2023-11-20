import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  name: string;
  date: Date | string;
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
    date: '',
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
    changeLoading(state) {
      state.pagination.isPagLoading = !state.pagination.isPagLoading;
    },
    changePage(state, action) {
      state.pagination.startPageFrom = 5 * (action.payload - 1);
    },
  },
});

export const { changeLoading } = dataSlice.actions;

export default dataSlice.reducer;
