import React from "react";

import { Switch, Route } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import PaitientSignupForm from "../components/PatientSignupForm";
import SignPage from "../components/SignPage";
import { PATH } from "../utils/constants";
import DoctorsList from "./DoctorsList";

import "react-toastify/dist/ReactToastify.css";
import DoctorAppointment from "./DoctorAppointment";
import DoctorProfile from "./DoctorProfile";
import PatientProfile from "./PatientProfile";
import PatientAppointment from "./patientAppointment";
import DoctorSignupForm from "../components/DoctorSignUpForm";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path={PATH.HOME}>
        {/* TODO */}
        <h1>home</h1>
      </Route>
      <Route path={PATH.LOGIN}>
        <SignPage patientPage={<LogInForm />} doctorPage={<LogInForm />} />
      </Route>
      <Route path={PATH.SINGUP}>
        <SignPage patientPage={<PaitientSignupForm />} doctorPage={<DoctorSignupForm />} />
      </Route>

      {/* Doctor pages */}
      <Route path={PATH.DOCTORS_LIST}>
        <DoctorsList />
      </Route>
      <Route path={PATH.DOCTER_PROFILE + ":id/"}>
        <DoctorProfile />
      </Route>
      <Route path={PATH.DOCTER_APPOINTMENT + ":id/"}>
        <DoctorAppointment />
      </Route>

      {/* Patient pages */}
      <Route path={PATH.PATIENT_PROFILE + ":id/"}>
        <PatientProfile />
      </Route>
      <Route path={PATH.PATIENT_APPOINTMENT + ":id/"}>
        <PatientAppointment />
      </Route>

      {/* FourOFour */}
      <Route path="/">
        <h1>404</h1>
        {/* TODO */}
      </Route>
    </Switch>
  );
}
