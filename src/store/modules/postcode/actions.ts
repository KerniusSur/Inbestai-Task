import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { PostCodes } from "../../../api/PostCodes";
import PostCode from "../../../models/postcode/PostCode";
import { RootState } from "../../configureStore";
import { postcodeSlice } from "./slice";

const actiions = postcodeSlice.actions;

export const addPostCode =
  (
    newPostCode: PostCode
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    dispatch(actiions.addPostCode({ postcode: newPostCode }));
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
    const postCodeApi = new PostCodes() as PostCodes;
    const response = await postCodeApi.lookup(newPostCode);

    if (response === null) {
      return false;
    }

    const postCode: PostCode = {
      id: response.result.postcode,
      postcode: response.result.postcode,
      country: response.result.country,
      longitude: response.result.longitude.toString(),
      latitude: response.result.latitude.toString(),
      adminDistrict: response.result.admin_district,
      createdAt: new Date().toISOString(),
    };

    dispatch(actiions.addPostCode({ postcode: postCode }));
  };
