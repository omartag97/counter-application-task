import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { counterSlice } from "../state/index";

const slices = [counterSlice];

export const store = configureStore({
  reducer: {
    ...slices.reduce(
      (acc, slice) => ({ ...acc, [slice.name]: slice.reducer }),
      {}
    ),
  },
});

store.asyncReducers = {};

slices.forEach((slice) => {
  store.asyncReducers[slice.name] = slice.reducer;
});

const createReducerInjector = () => {
  const injectReducer = (key, asyncSlice) => {
    slices.push(asyncSlice);
    store.asyncReducers[key] = asyncSlice.reducer;
    store.replaceReducer(
      combineReducers({
        ...store.asyncReducers,
      })
    );
  };

  return injectReducer;
};

export const reducerInjector = createReducerInjector();

setupListeners(store.dispatch);
