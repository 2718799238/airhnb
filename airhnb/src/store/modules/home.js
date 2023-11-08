import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeLongFor,
  getHomePlusData,
  getHomeRecommendDest,
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  const res = await getHomeGoodPriceData();
  const res2 = await getHomeHighScoreData();
  const res3 = await getHomeDiscountData();
  const res4 = await getHomeRecommendDest();
  const res5 = await getHomeLongFor();
  const res6 = await getHomePlusData();
  return [res, res2, res3, res4, res5, res6];
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScore: {},
    discountInfo: {},
    recommendDestInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload[0];
      state.highScore = payload[1];
      state.discountInfo = payload[2];
      state.recommendDestInfo = payload[3];
      state.longForInfo = payload[4];
      state.plusInfo = payload[5];
    },
  },
});
export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
