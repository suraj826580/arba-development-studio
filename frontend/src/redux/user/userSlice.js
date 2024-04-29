import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/apis/request";

const initialState = {
  isLoading: false,
  error: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
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
  userSlice.actions;
export default userSlice.reducer;

// functions
export const getUser = async (dispatch) => {
  try {
    dispatch(registerRequest());
    const data = await request(
      `${process.env.REACT_APP_BASE_URL}/auth/get-user`,
      "GET"
    );
    dispatch(registerSuccess(data));
    return data;
  } catch (error) {
    console.log(error.message);
    dispatch(registerFailure(error.message));
  }
};
