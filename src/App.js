import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={10}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={10}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={10}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={10}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={10}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={10}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={10}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={10}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
