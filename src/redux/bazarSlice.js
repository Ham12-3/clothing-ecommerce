import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { addToCart } = bazarSlice.actions;
const bazarReducer = bazarSlice.reducer;
export default bazarReducer;
