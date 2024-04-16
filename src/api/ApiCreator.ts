import { AxiosError } from "axios";
import Alert from "models/alert/Alert";
import { v4 as uuidv4 } from "uuid";
import { PostCodes } from "../api/PostCodes";
import alerts from "../store/alerts";

const notifyError = (message: string) => {
  const newAlert: Alert = {
    id: uuidv4(),
    message,
    severity: "error",
    createdAt: new Date().toISOString(),
  };
  alerts.addAlert(newAlert);
  console.log("ApiCreator: ", newAlert);
};

export const createApi = (): any => {
  let returnValue = new PostCodes();

  returnValue?.instance.interceptors.response.use(
    (response: any) => response,
    (error: AxiosError) => {
      notifyError(error.message);
      return;
    }
  );

  return returnValue;
};
