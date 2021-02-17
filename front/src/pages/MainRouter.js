import React from "react";

import { Switch, Route } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import PaitientSignupForm from "../components/PatientSignupForm";
import SignPage from "../components/SignPage";
import { PATH } from "../utils/constants";
import DoctorsList from "./DoctorsList";

import "react-toastify/dist/ReactToastify.css";
import DoctorAppointment from "./DoctorAppointment";

export default function MainRouter() {
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
      <Route path={PATH.DOCTER_APPOINTMENT + ":id/"}>
        <DoctorAppointment />
      </Route>
      <Route path="/">
        <h1>404</h1>
        {/* TODO */}
      </Route>
    </Switch>
  );
}
