import { createSlice } from "@reduxjs/toolkit";

const marginSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      isHome: false,
    
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});
export const { changeHeaderConfigAction } = marginSlice.actions;
export default marginSlice.reducer;
