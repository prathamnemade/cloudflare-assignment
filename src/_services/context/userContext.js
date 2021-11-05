import React, { useReducer } from "react";

const initialState = {
  userName: null,
  postsData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return { ...state, userName: action.payload };
    case "SET_POSTS_DATA":
      return { ...state, postsData: action.payload };
    default:
      return state;
  }
};
export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};
