import { LOCAL_STORAGE, AUTH_ACTION_TYPE } from "../utils/constants";

let user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER));
const initialState = user ? { user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN_SUCCESS:
      return { user: action.user };
    case AUTH_ACTION_TYPE.LOGOUT:
      return {};
    default:
      return state;
  }
}
