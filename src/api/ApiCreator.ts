import { AxiosError } from "axios";
import { PostCodes } from "../api/PostCodes";
import toast from "../store/toast";

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
      toast.error("The given postcode is invalid. Please try again.");
      return Promise.reject(error.message);

    case 401:
    case 403:
      toast.error("You are not authorized to access this resource.");
      window.location.href = "/";
      return Promise.reject(error.message);

    case 404:
      toast.error("The given postcode was not found. Please try again.");
      return Promise.reject(error.message);

    case 500:
      toast.error("An error occurred on the server. Please try again later.");
      return Promise.reject(error.message);

    default:
      toast.error("An error occurred. Please try again later.");
      return Promise.reject(error.message);
  }
};
