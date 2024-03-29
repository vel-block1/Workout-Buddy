import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WorkoutsContextProvider } from "./context/WorkoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);
