import PostCodeState from "../models/postcode/PostCodeState";
import ToastState from "../models/toast/ToastState";

export const KEY = "REDUX_STATE";

const LocalStorageUtils = {
  loadState: (): any | undefined => {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (!serializedState) {
        return undefined;
      }

      const state: Partial<{
        toasts: ToastState;
        postcodes: PostCodeState;
      }> = JSON.parse(serializedState);

      return state;
    } catch (e) {
      return undefined;
    }
  },

  saveState: async (state: any): Promise<void> => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(KEY, serializedState);
    } catch (e) {
      // Ignore
    }
  },
};

export default LocalStorageUtils;
