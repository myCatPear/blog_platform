import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isInitializedApp: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInitializedApp(state, action: PayloadAction<{ value: boolean }>) {
      state.isInitializedApp = action.payload.value;
    },
  },
});

export const appReducer = appSlice.reducer;

export const { setIsInitializedApp } = appSlice.actions;
