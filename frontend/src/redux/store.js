import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice/registerSlice";
import loginReducer from "./loginSlice/loginSlice";
import userReducer from "./user/userSlice";
import updateUserReducer from "./user/updateUserSlice";
import updatePasswordSlice from "./changepasswordSlice/changepasswordSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
    updateUser: updateUserReducer,
    updatePassword: updatePasswordSlice,
  },
});

export default store;
