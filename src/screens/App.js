import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BasePage } from "./BasePage/BasePage";
import { SecondPage } from "./SecondPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />} />
        <Route path="/nextpage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
