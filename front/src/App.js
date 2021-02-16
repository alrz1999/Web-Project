import React from "react";
import CustomFooter from "./pages/Footer";
import CustomAppBar from "./pages/AppBar";
import CustomContent from "./pages/Content";
import MainRouter from "./pages/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CustomAppBar />
        <MainRouter />
        {/* <CustomContent /> */}
        {/* <CustomFooter /> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
