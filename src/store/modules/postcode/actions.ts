import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import PostCode from "models/postcode/PostCode";
import { addPostCodeToStorage } from "../../../utils/localStorageUtil";
import { RootState } from "../../configureStore";
import { postcodeSlice } from "./slice";

const actiions = postcodeSlice.actions;

export const addPostCode =
  (
    newPostCode: PostCode
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    const res = dispatch(actiions.addPostCode({ postcode: newPostCode }));
    addPostCodeToStorage(newPostCode);
    return res;
  };

export const removePostCode =
  (
    postCodeToRemove: PostCode
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  (dispatch) => {
    dispatch(actiions.removePostCode({ postcode: postCodeToRemove }));
  };

export const lookupPostCode =
  (newPostCode: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    dispatch(actiions.addPostCode({ postcode: newPostCode }));
  };
