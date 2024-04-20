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
    postcodeToRemove: PostCodeContent
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  (dispatch) => {
    dispatch(actions.removePostCode({ postcode: postcodeToRemove }));
  };

export const autocomplete =
  (
    wrongPostcode: string
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    const postcodeApi = createApi() as PostCodes;
    const response = await postcodeApi.autocomplete(wrongPostcode);
    let suggestions: string[] = [];

    if (response.result) {
      suggestions = response.result;
    }

    dispatch(actions.addSuggestions({ suggestions }));
  };

export const clearSuggestions =
  (): ThunkAction<void, RootState, unknown, UnknownAction> => (dispatch) => {
    dispatch(actions.clearSuggestions());
  };

export const lookupPostCode =
  (newPostCode: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    const postcodeApi = createApi() as PostCodes;
    const response = await postcodeApi.lookup(newPostCode).catch((error) => {
      dispatch(autocomplete(newPostCode));
    });

    if (!response) {
      return;
    }

    const postcode: PostCodeContent = {
      id: uuidv4(),
      postcode: response.result.postcode,
      country: response.result.country,
      longitude: response.result.longitude.toString(),
      latitude: response.result.latitude.toString(),
      adminDistrict: response.result.codes.admin_district,
      createdAt: new Date().toISOString(),
    };

    dispatch(actions.addPostCode({ postcode: postcode }));
  };
