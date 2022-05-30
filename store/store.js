import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import driverListSlice from './slices/driverList';

const rootReducer = combineReducers({
    driverListSlice: driverListSlice.reducer
})

const store = configureStore({
    reducer:rootReducer
})


export default store;