import { creativeMockData } from "@/mocks/CreativeMockData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const CreativesSlice = createSlice({
  name: "creatives",
  initialState: {
    items: creativeMockData,
  },
  reducers: {
    toggleCreative(state, action: PayloadAction<number>) {
      const creative = state.items.find((item) => item.id === action.payload);

      if (creative) {
        creative.isActive = !creative.isActive;
      }
    },
  },
});

export const { toggleCreative } = CreativesSlice.actions;
export default CreativesSlice.reducer;
