import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import PaitientSignupForm from "../components/PatientSignupForm";
import SignPage from "../components/SignPage";
import { PATH } from "../utils/constants";
import DoctorsList from "./DoctorsList";

import "react-toastify/dist/ReactToastify.css";

export default function MainRouter() {
  let location = useLocation();
  console.log(location);
  return (
    <Switch>
      <Route path={PATH.LOGIN}>
        <SignPage patientPage={<LogInForm />} doctorPage={<LogInForm />} />
      </Route>
      <Route path={PATH.SINGUP}>
        <SignPage patientPage={<PaitientSignupForm />} />
      </Route>
      <Route path={PATH.DOCTORS_LIST}>
        <DoctorsList />
      </Route>
    </Switch>
  );
}
