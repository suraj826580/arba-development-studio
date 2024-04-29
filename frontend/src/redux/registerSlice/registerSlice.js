import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/apis/request";

const initialState = {
  isLoading: false,
  error: false,
  user: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    registerFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } =
  registerSlice.actions;
export default registerSlice.reducer;

// functions
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const data = await request(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      "POST",
      userData
    );
    dispatch(registerSuccess(data));
    return data;
  } catch (error) {
    console.log(error.message);
    dispatch(registerFailure(error.message));
  }
};
