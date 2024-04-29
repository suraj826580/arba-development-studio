import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/apis/request";

const initialState = {
  isLoading: false,
  error: false,
  user: null,
};

const updatePasswordSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePasswordRequest: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    updatePasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    updatePasswordFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure,
} = updatePasswordSlice.actions;
export default updatePasswordSlice.reducer;

// functions
export const updatePassword = (userData) => async (dispatch) => {
  try {
    dispatch(updatePasswordRequest());
    const data = await request(
      `${process.env.REACT_APP_BASE_URL}/auth/change-password`,
      "PATCH",
      userData
    );
    dispatch(updatePasswordSuccess(data));
    return data;
  } catch (error) {
    console.log(error.message);
    dispatch(updatePasswordFailure(error.message));
  }
};
