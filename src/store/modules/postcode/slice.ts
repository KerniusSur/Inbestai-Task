import { createSlice } from "@reduxjs/toolkit";
import PostCodeSlice from "models/postcode/PostCodeSlice";

const initialState: PostCodeSlice = {
  postcodes: [],
};

export const postcodeSlice = createSlice({
  name: "postcode",
  initialState: initialState,
  reducers: {
    addPostCode: (state, action) => {
      state.postcodes.push(action.payload);
    },
    removePostCode: (state, action) => {
      state.postcodes = state.postcodes.filter(
        (postcode) => postcode.id !== action.payload
      );
    },
  },
});

export const { addPostCode, removePostCode } = postcodeSlice.actions;

export default postcodeSlice.reducer;
