import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "store/modules/alert/slice";
import { postcodeSlice } from "store/modules/postcode/slice";

export const rootReducer = combineReducers({
  alerts: alertSlice.reducer,
  postcodes: postcodeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
