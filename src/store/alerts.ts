import Alert from "models/alert/Alert";
import { store } from "./configureStore";
import { addAlert, removeAlert } from "./modules/alert/actions";

const alerts = {
  addAlert: (newAlert: Alert) => {
    store.dispatch(addAlert(newAlert));
  },
  removeAlert: () => {
    store.dispatch(removeAlert());
  },
};

export default alerts;
