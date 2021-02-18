const LOCAL_STORAGE = {
  USER: "USER",
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
  DOCTORS_LIST: "/doctors/list/",
  DOCTER_PROFILE: "/doctor/profile/",
  DOCTER_APPOINTMENT: "/doctor/appointment/",
  // patient pages
  PATIENT_PROFILE: "/patient/profile/",
  PATIENT_APPOINTMENT: "/patient/appointment/",
};

const FONT_FAMILY = ["Sahel", "Samim", "Shabnam"].join(",");

export { LOCAL_STORAGE, AUTH_ACTION_TYPE, PATH, FONT_FAMILY };
