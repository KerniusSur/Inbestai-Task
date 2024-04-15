import {
  EnhancedStore,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Alert from "../models/alert/Alert";
import AlertSlice from "../models/alert/AlertSlice";
import PostCodeSlice from "../models/postcode/PostCodeSlice";
import alertActions from "../store/modules/alert/actions";
import { uuid } from "uuidv4";

const setupAxiosInterceptors = (
  store: EnhancedStore<
    {
      alerts: AlertSlice;
      postcodes: PostCodeSlice;
    },
    UnknownAction,
    Tuple<
      [
        StoreEnhancer<{
          dispatch: ThunkDispatch<
            {
              alerts: AlertSlice;
              postcodes: PostCodeSlice;
            },
            undefined,
            UnknownAction
          >;
        }>,
        StoreEnhancer,
      ]
    >
  >
) => {
  const handleResponseError = async (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (window.location.pathname !== "/") {
        window.location.assign("/");
      }
    } else {
      store.dispatch(alertActions.addAlert(mapErrorToAlert(error)));
    }
    return Promise.reject(error);
  };

  axios.interceptors.response.use(
    (response) => response.data,
    handleResponseError
  );
};

const mapErrorToAlert = (error: AxiosError): Alert => {
  return {
    id: uuid(),
    message: error.message,
    severity: "error",
    createdAt: new Date(),
  };
};

export default setupAxiosInterceptors;
