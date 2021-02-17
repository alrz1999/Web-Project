import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import SignPage from "../components/SignPage";
import { PATH } from "../utils/constants";
import DoctorsList from "./DoctorsList";

export default function MainRouter() {
  let location = useLocation();
  console.log(location);
  return (
    <Switch>
      <Route path={PATH.LOGIN}>
        <SignPage patientPage={<LogInForm />} doctorPage={<LogInForm />} />
      </Route>
      <Route path={PATH.SINGUP}></Route>
      <Route>
        <DoctorsList />
      </Route>
    </Switch>
  );
}
