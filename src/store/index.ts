import { configureStore } from "@reduxjs/toolkit";

import CreativesReducer from "./slices/CreativesSlice";
import ResultsReducer from "./slices/ResultsSlice";

export const store = configureStore({
  reducer: {
    results: ResultsReducer,
    creatives: CreativesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
