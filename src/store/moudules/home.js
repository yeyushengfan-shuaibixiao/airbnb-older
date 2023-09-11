import {
  getHomeGoodPriceData,
  getHomeDiscountData,
  getHomeHighScoreData,
  getHomeHotRecommentData,
  getHomeLongForData,
  getHomePlusData,
} from "@/services/moudules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHomeDateAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAtion(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAtion(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAtion(res));
      // console.log(res);
    });
    getHomeHotRecommentData().then((res) => {
      dispatch(changeRecommendInfoAtion(res));
      // console.log(res);
    });
    getHomeLongForData().then((res) => {
      dispatch(changeLongforInfoAction(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changeHomePlusAction(res));
    });
  }

  // async (payload) => {
  //   const res = await getHomeGoodPriceData();
  //   // console.log(res);
  //   const res2 = await getHomeHighScoreData();
  //   // return res;
  //   return {
  //     goodPrice: res,
  //     highScore: res2,
  //   };
  // }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    loading: false,
    homePlusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAtion(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAtion(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAtion(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAtion(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changeHomePlusAction(state, { payload }) {
      state.homePlusInfo = payload;
    },
  },
  // extraReducers: {
  // [fetchHomeDateAction.fulfilled](state, { payload }) {
  //   state.goodPriceInfo = payload;
  // },
  // },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchHomeDateAction.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchHomeDateAction.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.goodPriceInfo = action.payload;
  //     })
  //     .addCase(fetchHomeDateAction.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
});
export const {
  changeGoodPriceInfoAtion,
  changeHighScoreInfoAtion,
  changeDiscountInfoAtion,
  changeRecommendInfoAtion,
  changeLongforInfoAction,
  changeHomePlusAction,
} = homeSlice.actions;
export default homeSlice.reducer;
