import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchRandomMessage from "./messagesAPI";

const initialState = {
  status: 'idle',
  randomMessage: null,
};

export const fetchRandomMessageAsync = createAsyncThunk(
  "message/fetchRandomMessage",
  async () => {
    const { data } = await fetchRandomMessage();
    return data.text;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMessageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomMessageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.randomMessage = action.payload;
      });
  },
});

export const selectRandomMessage = (state) => state.message.randomMessage;

export default messageSlice.reducer;
