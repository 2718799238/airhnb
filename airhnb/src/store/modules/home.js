import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  const res = await getHomeGoodPriceData();
  const res2 = await getHomeHighScoreData();
  return [res, res2];
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScore: {},
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
    },
  },
});
export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
