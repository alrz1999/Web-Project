import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import SignPage from "../components/SignPage";

export default function MainRouter() {
  let location = useLocation();
  console.log(location);
  return (
    <Switch>
      <Route path="/login">
        <SignPage patientPage={<LogInForm />} doctorPage={<LogInForm />} />
      </Route>
      <Route path="/signup">
      </Route>
    </Switch>
  );
}
