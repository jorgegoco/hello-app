import React from "react";
import Greetings from "./Greetings";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getGreeting } from "../redux/greeting/greetingSlice";

const App = () => {
  const dispatch = useDispatch();
  dispatch(getGreeting());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
