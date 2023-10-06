import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyParentComponent from "./MyComponent";
import Task from "./Task";
import Rolling from "./Rolling";
import reportWebVitals from "./reportWebVitals";
import ThreeCards from "./ThreeCards";
import TestNi from "./SetTimeoutTest";
import TaskQueue from "./TaskQueue";
import ColorSequence from "./ColorSequence";
import { BrowserRouter } from "react-router-dom";
import Bingo from "./Bingo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Task/> */}
    {/* <Rolling/> */}
    {/* <MyParentComponent/> */}
    {/* <ThreeCards/> */}
    {/* <TestNi/> */}
    {/* <TaskQueue/> */}
    {/* <Task/> */}
    {/* <ColorSequence/> */}
    <BrowserRouter>
    {/* <App/> */}
    <Bingo/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
