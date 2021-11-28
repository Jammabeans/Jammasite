import { createSlice } from "@reduxjs/toolkit";

  const initialStore = {
    isDarkMode: false,
  };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialStore,
  reducers: {
      setTheme:(state, action) =>{
          state.isDarkMode = action.payload
      }
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;