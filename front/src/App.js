import React from "react";
import CustomAppBar from "./components/AppBar";
import MainRouter from "./pages/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CustomAppBar />
        <MainRouter />
      </Router>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
