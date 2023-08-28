import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./Components/style.css";
import NewsComponents from "./Components/NewsComponents";
import { Routes, Route } from "react-router";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  Apikey = process.env.REACT_APP_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <Navbar />
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <NewsComponents
                  pageSize={12}
                  Apikey={this.Apikey}
                  category={"general"}
                  country={"in"}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/Health"
              element={
                <NewsComponents
                  pageSize={12}
                  Apikey={this.Apikey}
                  category={"health"}
                  country={"in"}
                  setProgress={this.setProgress}
                />
              }
            />{" "}
            <Route
              path="/Science"
              element={
                <NewsComponents
                  pageSize={12}
                  Apikey={this.Apikey}
                  category={"science"}
                  country={"in"}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <NewsComponents
                  pageSize={12}
                  Apikey={this.Apikey}
                  category={"entertainment"}
                  country={"in"}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/Business"
              element={
                <NewsComponents
                  pageSize={12}
                  Apikey={this.Apikey}
                  category={"Business"}
                  country={"in"}
                  setProgress={this.setProgress}
                />
              }
            />
          </Routes>

          {/* <NewsComponents
            pageSize={6}
            category={"entertainment"}
            country={"in"}    setProgress={this.setProgress}
          /> */}
        </div>
      </div>
    );
  }
}
export default App;
