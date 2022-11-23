import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import driverListSlice from './slices/driverList';

const rootReducer = combineReducers({
    driverListSlice: driverListSlice.reducer
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
  
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

// const store = configureStore({
//     reducer:rootReducer
// })

const makeStore = () =>
  configureStore({
    reducer: reducer,
    devTools: true,
  });


// export default store;
export const wrapper = createWrapper(makeStore);



/*
import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { counterReducer } from '../features/counter';
import { kanyeReducer } from '../features/kanye';

const combinedReducer = combineReducers({
  counter: counterReducer,
  kanyeQuote: kanyeReducer,
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
*/