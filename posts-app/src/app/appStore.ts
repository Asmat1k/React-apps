import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './appSlice';
import { postsApi } from '../shared/api/postsApi';

const rootReducer = combineReducers({
  userReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
