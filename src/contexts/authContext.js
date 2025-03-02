import { createContext } from "react";

export const initialState = {
  user: null,
  isAuthenticate: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticate: true };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticate: false };

    default:
      return state;
  }
};
export const AuthContext = createContext();
