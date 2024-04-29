import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/apis/request";

const initialState = {
  isLoading: false,
  error: false,
  user: null,
};

const updateUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserRequest: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    updateUserFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { updateUserRequest, updateUserSuccess, updateUserFailure } =
  updateUserSlice.actions;
export default updateUserSlice.reducer;

// functions
export const updateUser = (userData) => async (dispatch) => {
  try {
    dispatch(updateUserRequest());
    const data = await request(
      `${process.env.REACT_APP_BASE_URL}/auth/update-profile`,
      "PATCH",
      userData
    );
    dispatch(updateUserFailure(data));
    return data;
  } catch (error) {
    console.log(error.message);
    dispatch(updateUserFailure(error.message));
  }
};
