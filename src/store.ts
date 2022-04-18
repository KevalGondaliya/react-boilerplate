import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const RootReducer = combineReducers({});

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof RootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
