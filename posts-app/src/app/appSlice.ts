import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  name: string;
  date: Date | string;
}

const initialState: UserState = {
  email: '',
  name: '',
  date: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
