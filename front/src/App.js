import React from "react";
import CustomAppBar from "./components/AppBar";
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
