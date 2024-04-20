import { createSlice } from "@reduxjs/toolkit";
import PostCodeContent from "../../../models/postcode/PostCodeContent";
import PostCodeState from "../../../models/postcode/PostCodeState";

const initialState: PostCodeState = {
  postcodes: [],
  suggestions: [],
};

export const postcodeSlice = createSlice({
  name: "postcode",
  initialState: initialState,
  reducers: {
    addPostCode: (state, action) => {
      state.postcodes.unshift(action.payload.postcode);
    },
    removePostCode: (state, action) => {
      state.postcodes = state.postcodes.filter(
        (postcode: PostCodeContent) =>
          postcode.id !== action.payload.postcode.id
      );
    },
    addSuggestions: (state, action) => {
      state.suggestions = action.payload.suggestions;
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
  },
});

export const { addPostCode, removePostCode, addSuggestions, clearSuggestions } =
  postcodeSlice.actions;

export default postcodeSlice.reducer;
