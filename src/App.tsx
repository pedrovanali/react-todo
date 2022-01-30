import React from "react";
import "./App.scss";

import ContextsWrapper from "./contexts/ContextsWrapper";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import ChartPage from "./pages/ChartPage";

function App() {
  return ContextsWrapper(
    <Router>
      <div className="menu-container">
        <ul className="menu-list">
          <li>
            <Link to="/">
              <span>Todo Page</span>
            </Link>
          </li>
          <li>
            <Link to="/charts">
              <span>Charts Page</span>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/charts" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
