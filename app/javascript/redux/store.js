import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import greetingSlice from "./greeting/greetingSlice";

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    greeting: greetingSlice,
  },
});

export default store;