import React from "react";
import CustomAppBar from "./pages/AppBar";
import MainRouter from "./pages/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CustomAppBar />
        <MainRouter />
      </Router>
    </React.Fragment>
  );
}

export default App;
