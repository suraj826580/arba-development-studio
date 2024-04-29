import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice/registerSlice";
import loginReducer from "./loginSlice/loginSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
