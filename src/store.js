import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./slices/popupSlices.js";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
