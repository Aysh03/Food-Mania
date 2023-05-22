// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   items: [],
// }

// export const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//       state.items = [...state.items, action.payload]
//     },
//     removeFromBasket: (state, action) => {
//       let newBasket = [...state.items];
//       let itemIndex = state.items.findIndex(item=> item.id==action.payload.id);
//       if(itemIndex>=0){
//         newBasket.splice(itemIndex, 1);
//       }else{
//         console.log("can't remove item as its not in the basket");
//       }
//       state.items = newBasket
//     },
//     emptyBasket: (state, action)=>{
//         state.items = [];
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addToBasket, removeFromBasket, emptyBasket } = basketSlice.actions

// export const selectBasketItems = state=> state.basket.items;

// export const selectBasketItemsById = (state, id)=> state.basket.items.filter(item=> item.id==id);

// export const selectBasketTotal = state=> state.basket.items.reduce((total, item)=> total = total += item.price, 0)

// export default basketSlice.reducer










import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketState {
  items: any[]; // Replace 'any' with the appropriate type for items in the basket
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ id: number }>) => {
      const newBasket = [...state.items];
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.log("Can't remove item as it's not in the basket.");
      }
      state.items = newBasket;
    },
    emptyBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, emptyBasket } = basketSlice.actions;

export const selectBasketItems = (state: { basket: BasketState }) => state.basket.items;

export const selectBasketItemsById = (state: { basket: BasketState }, id: number) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state: { basket: BasketState }) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
