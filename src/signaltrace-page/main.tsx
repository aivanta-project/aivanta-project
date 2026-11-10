import React from "react";
import ReactDOM from "react-dom/client";
import { SignalTracePage } from "./SignalTracePage";
import "../styles/tokens.css";
import "../styles/components.css";
import "../styles/main.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <SignalTracePage />
    </React.StrictMode>
  );
}
