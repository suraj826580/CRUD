import {
  GET_LOGIN_FAILURE,
  GET_LOGIN_REQ,
  GET_LOGIN_SUCCESS,
  GET_PATCH_REQ,
} from "./actionTypes";

const intialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: false,
};
export const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQ:
      return { ...state, isLoading: true, isError: false };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
      };
    case GET_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_PATCH_REQ:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
