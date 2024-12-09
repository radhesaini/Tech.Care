import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  item: {},
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<boolean>) => {
      state.item = action.payload;
    },
  },
});

export const { setItem } = itemSlice.actions;
export const authReducer = itemSlice.reducer;
