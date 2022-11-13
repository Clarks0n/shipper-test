import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DriverListService from "../../services/driverList-service/driverListService";

const initialStateValue = { 
    dataSource: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
};

export const getDriverList = createAsyncThunk(
  "driver/getList",
  async () => {
    const res = await DriverListService.getDriverList();
    return res.data.results;
  }
);

const driverListSlice = createSlice({
  name: "driverList",
  initialState: initialStateValue,
  reducers: {
    clearState: () =>  initialState
  },
  extraReducers: {
    [getDriverList.fulfilled]: (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        return ({ ...state, dataSource: action.payload})
    },
    [getDriverList.pending]: (state, action) => {
        state.isFetching = true;
    },
    [getDriverList.rejected]: (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
    },
  },
});

export const { clearState } = driverListSlice.actions;

export default driverListSlice;