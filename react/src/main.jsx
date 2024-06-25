import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initFakeApi } from "./mirage.js";
import "./index.css";

// don't touch this line
initFakeApi();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
