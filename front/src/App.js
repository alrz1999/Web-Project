import React from "react";
import CustomAppBar from "./components/AppBar";
import MainRouter from "./pages/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createStore } from "redux";
import rootReducer from "./reducers/root.reducer";
import { Provider } from "react-redux";

function App() {
  const store = createStore(rootReducer);

  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <CustomAppBar />
          <MainRouter />
        </Router>
        <ToastContainer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
