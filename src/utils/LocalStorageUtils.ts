export const KEY = "REDUX_STATE";

const LocalStorageUtils = {
  loadState: (): any | undefined => {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (!serializedState) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  },

  saveState: (state: any): void => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(KEY, serializedState);
    } catch (e) {
      // Ignore
    }
  },
};

export default LocalStorageUtils;
