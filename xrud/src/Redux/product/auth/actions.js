import axios from "axios";
import {
  GET_LOGIN_FAILURE,
  GET_LOGIN_REQ,
  GET_LOGIN_SUCCESS,
  GET_PATCH_REQ,
} from "./actionTypes";

const url = `https://reqres.in/api/login`;
export const getAuth = (userDetails) => (dispatch) => {
  dispatch(actionLoginReq());
  return axios
    .post(url, userDetails)
    .then((res) => dispatch(actionLoginSuccess(res.data.token)))
    .catch((err) => dispatch(actionLoginFailure()));
};

const actionLoginReq = () => {
  return { type: GET_LOGIN_REQ };
};
const actionLoginSuccess = (payload) => {
  return { type: GET_LOGIN_SUCCESS, payload };
};
const actionLoginFailure = () => {
  return { type: GET_LOGIN_FAILURE };
};

const actionPatchReq = () => {
  return { type: GET_PATCH_REQ };
};

export const getPatch = (data, id) => (dispatch) => {
  dispatch(actionLoginReq());
  return axios
    .patch(`http://localhost:8080/products/${id}`, data)
    .then((res) => dispatch(actionPatchReq()))
    .catch((err) => dispatch(actionLoginFailure()));
};
