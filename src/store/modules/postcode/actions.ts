import { ThunkAction, Action } from "@reduxjs/toolkit";
import PostCode from "models/postcode/PostCode";
import { RootState } from "../../configureStore";
import { postcodeSlice } from "./slice";

const postcodeActions = postcodeSlice.actions;

export const addPostCode =
  (newPostCode: PostCode): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    return dispatch(postcodeActions.addPostCode(newPostCode));
  };

export const removePostCode =
  (postCodeToRemove: PostCode): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    dispatch(postcodeActions.removePostCode(postCodeToRemove));
  };

export default postcodeActions;
