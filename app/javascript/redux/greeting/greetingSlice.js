import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FETCH_GREETING = "FETCH_GREETING";

export const getGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const response = await fetch("http://127.0.0.1:3000/api/v1/greetings");
  const data = await response.json();
  return data;
});

const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    name: "",
    isLoading: false,
    successful: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(getGreeting.fulfilled, (state, action) => ({
      ...state,
      successful: true,
      name: action.payload,
    }));

    builder.addCase(getGreeting.rejected, (state, action) => ({
      ...state,
      error: action.error,
    }));
  },
});

export default greetingSlice.reducer;