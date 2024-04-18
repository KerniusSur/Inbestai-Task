import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { createApi } from "../../../api/ApiCreator";
import { PostCodes } from "../../../api/PostCodes";
import PostCodeContent from "../../../models/postcode/PostCodeContent";
import { RootState } from "../../configureStore";
import { postcodeSlice } from "./slice";

const actions = postcodeSlice.actions;

export const addPostCode =
  (
    newPostCode: PostCodeContent
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    dispatch(actions.addPostCode({ postcode: newPostCode }));
  };

export const removePostCode =
  (
    postCodeToRemove: PostCodeContent
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  (dispatch) => {
    dispatch(actions.removePostCode({ postcode: postCodeToRemove }));
  };

export const lookupPostCode =
  (newPostCode: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    const postCodeApi = createApi() as PostCodes;
    const response = await postCodeApi.lookup(newPostCode);

    if (response === null) {
      return false;
    }

    const postCode: PostCodeContent = {
      id: uuidv4(),
      postcode: response.result.postcode,
      country: response.result.country,
      longitude: response.result.longitude.toString(),
      latitude: response.result.latitude.toString(),
      adminDistrict: response.result.codes.admin_district,
      createdAt: new Date().toISOString(),
    };

    dispatch(actions.addPostCode({ postcode: postCode }));
  };
