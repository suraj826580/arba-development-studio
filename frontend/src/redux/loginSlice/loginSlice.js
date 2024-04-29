// src/features/auth/loginSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/apis/request";

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;

// Define the asynchronous action creator for logging in a user
export const loginUserAsync = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const data = await request(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      "POST",
      userData
    );
    localStorage.setItem("token", JSON.stringify(data.token));
    dispatch(loginSuccess(data));
    return data;
  } catch (error) {
    console.log(error.message);
    dispatch(loginFailure(error.message));
  }
};
