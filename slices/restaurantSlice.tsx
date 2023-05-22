import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  restaurant: any
}

const initialState: CounterState = {
  restaurant:null,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {

    setRestaurant: (state, action: PayloadAction<number>) => {
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantSlice.actions;


export const SelectedRestaurant = (state: { restaurant: { restaurant: any } })=>state.restaurant.restaurant;

export default restaurantSlice.reducer