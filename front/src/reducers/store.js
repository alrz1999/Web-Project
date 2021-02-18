import { AUTH_ACTION_TYPE, LOCAL_STORAGE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";


export function StoreLogInUser(user) {
  localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(user));
}

export function StoreLogOutUser() {
    localStorage.removeItem(LOCAL_STORAGE.USER)
}