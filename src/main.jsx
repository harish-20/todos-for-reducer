import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import TodoContextProvider from "./context/TodoContextProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
