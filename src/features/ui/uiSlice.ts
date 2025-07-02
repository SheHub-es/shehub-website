import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isDarkMode: boolean;
}

const initialState: UIState = {
  isDarkMode: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
