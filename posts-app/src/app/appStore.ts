import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './appSlice';
import { jsonApi } from '../shared/api/jsonApi';

const rootReducer = combineReducers({
  userReducer,
  [jsonApi.reducerPath]: jsonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
