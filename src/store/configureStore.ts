import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./modules/alert/slice";
import { postcodeSlice } from "./modules/postcode/slice";

export const rootReducer = combineReducers({
  alerts: alertSlice.reducer,
  postcodes: postcodeSlice.reducer,
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
