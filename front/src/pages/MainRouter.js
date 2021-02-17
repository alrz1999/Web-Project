import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import SignupForm from "../components/SignupForm";
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
      <Route path={PATH.SINGUP}>
        <SignPage patientPage={<SignupForm />} />
      </Route>
      <Route path={PATH.DOCTORS_LIST}>
        <DoctorsList />
      </Route>
    </Switch>
  );
}
