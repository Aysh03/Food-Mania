
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import restaurantSlice from './slices/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
