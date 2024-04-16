import { AxiosError } from "axios";
import { showErrorToast } from "../utils/ToastUtils";
import { PostCodes } from "../api/PostCodes";

export const createApi = (): any => {
  let returnValue = new PostCodes({ baseURL: "https://api.postcodes.io" });

  returnValue.instance.interceptors.response.use(
    (response: any) => response,
    handleErrors
  );

  return returnValue;
};

const handleErrors = (error: AxiosError) => {
  switch (error.response?.status) {
    case 400:
      showErrorToast("The given postcode is invalid. Please try again.");
      return Promise.reject(error);

    case 401:
    case 403:
      showErrorToast("You are not authorized to access this resource.");
      window.location.href = "/";
      return Promise.reject(error);

    case 404:
      showErrorToast("The given postcode was not found. Please try again.");
      return Promise.reject(error);

    case 500:
      showErrorToast(
        "An error occurred on the server. Please try again later."
      );
      return Promise.reject(error);

    default:
      showErrorToast("An error occurred. Please try again later.");
      return Promise.reject(error);
  }
};
