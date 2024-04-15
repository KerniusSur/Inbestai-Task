import axios, { AxiosError } from "axios";

const setupAxiosInterceptors = () => {
  const handleResponseError = async (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (window.location.pathname !== "/") {
        window.location.assign("/");
      }
    } else {
      //   store.dispatch(alertActions.addAlert(mapErrorToAlert(responseError)));
    }
    return Promise.reject(error);
  };

  // Add a response interceptor, to handle errors and pass the response data
  axios.interceptors.response.use(
    (response) => response.data,
    handleResponseError
  );
};

export default setupAxiosInterceptors;
