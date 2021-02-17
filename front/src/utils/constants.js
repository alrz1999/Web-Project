const LOCAL_STORAGE = {
  USER: "USER",
};

const AUTH_ACTION_TYPE = {
  LOGIN_SUCCESS: "LOGIN",
  LOGOUT: "LOGOUT",
};

const PATH = {
  HOME: "/",
  LOGIN: "/login",
  SINGUP: "/signup",
  DOCTORS_LIST: "/doctors/list",
  DOCTER_PROFILE: "/doctor/profile/:id",
  PATIENT_PROFILE: "/patient/profile/:id",
  DOCTER_APPOINTMENT: "/doctor/appointment/",
};

const FONT_FAMILY = ["Sahel", "Samim", "Shabnam"].join(",");

export { LOCAL_STORAGE, AUTH_ACTION_TYPE, PATH, FONT_FAMILY };
