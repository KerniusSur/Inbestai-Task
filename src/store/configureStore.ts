import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toastSlice } from "./modules/toast/slice";
import { postcodeSlice } from "./modules/postcode/slice";
import LocalStorageUtils from "../utils/LocalStorageUtils";

export const rootReducer = combineReducers({
  toasts: toastSlice.reducer,
  postcodes: postcodeSlice.reducer,
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),

  preloadedState: LocalStorageUtils.loadState(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
