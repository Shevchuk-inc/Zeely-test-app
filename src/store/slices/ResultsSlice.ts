import { ResultsState } from "@/types/results";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ResultsState = {
  results: [
    {
      id: 1,
      value: 22.124,
      title: "Reach",
      currency: "USD",
      currencySymbol: "$",
    },
    {
      id: 2,
      value: 32.984,
      title: "Impressions",
      currency: null,
      currencySymbol: null,
    },
    {
      id: 3,
      value: 23.43,
      title: "CPM",
      currency: null,
      currencySymbol: null,
    },
    {
      id: 4,
      value: 9000,
      title: "KPI",
      currency: "UAH",
      currencySymbol: "₴",
    },
    {
      id: 5,
      value: 2000,
      title: "Research",
      currency: "UAH",
      currencySymbol: "₴",
    },
  ],
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
});

export default resultsSlice.reducer;
