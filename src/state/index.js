import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncIncrement = createAsyncThunk(
  "counter/asyncIncrement",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return 2;
  }
);

const RESET_COUNTER = 0;

export const LANGS = { en: "en", ar: "ar" };

const resrvedLanguage = localStorage.getItem("lang") || LANGS.en;

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    isFocused: false,
    language: resrvedLanguage,
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter = Math.max(0, state.counter - 1);
    },
    incrementCounterIfOdd: (state) => {
      if (state.counter % 2 !== 0) {
        state.counter += 1;
      }
    },

    addCounterValue: (state, { payload }) => {
      state.counter += parseInt(payload.inputValue);
    },

    setIsInputFocused: (state, { payload }) => {
      state.isFocused = payload;
    },

    clearCounter: (state) => {
      state.counter = RESET_COUNTER;
    },

    setLanguage: (state, { payload }) => {
      console.log(payload.language);
      state.language = payload.language;

      localStorage.setItem("lang", payload.language);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncIncrement.fulfilled, (state, action) => {
      state.counter += action.payload;
    });
  },
});

export const {
  incrementCounter,
  decrementCounter,
  incrementCounterIfOdd,
  addCounterValue,
  clearCounter,
  setIsInputFocused,
  setLanguage,
} = counterSlice.actions;

export const counterSelector = (state) => state.counter;
