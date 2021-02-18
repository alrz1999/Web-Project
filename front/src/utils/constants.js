const LOCAL_STORAGE = {
  USER: "USER",
};

const USER_ROLE = {
  PATIENT: "PATIENT",
  DOCTOR: "DOCTOR",
};

const AUTH_ACTION_TYPE = {
  LOGIN_SUCCESS: "LOGIN",
  LOGOUT: "LOGOUT",
};

const PATH = {
  HOME: "/",
  LOGIN: "/login/",
  SINGUP: "/signup/",
  // doctor pages
  DOCTORS_LIST: "/doctorss/list/",
  DOCTER_PROFILE: "/doctors/profile/",
  DOCTER_APPOINTMENT: "/doctors/appointments/",
  // patient pages
  PATIENT_PROFILE: "/patients/profile/",
  PATIENT_APPOINTMENT: "/patients/appointments/",
};

const FONT_FAMILY = ["Sahel", "Samim", "Shabnam"].join(",");

export { LOCAL_STORAGE, AUTH_ACTION_TYPE, PATH, FONT_FAMILY, USER_ROLE };
