import React from "react";
import ReactDOMClient from "react-dom/client";
import { BasePage } from "./screens/BasePage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BasePage />);
