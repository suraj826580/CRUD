import {
  GET_PRODUCTS_REQ,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
} from "./actionTypes";
import axios from "axios";

const url = `http://localhost:8080/products`;
export const getProductData = (params) => (dispatch) => {
  dispatch(actionGetProductReq());
  axios
    .get(url, params)
    .then((res) => {
      dispatch(actionGetProductSuccess(res.data));
    })
    .catch((err) => dispatch(actionGetProductfailure()));
};

const actionGetProductReq = () => {
  return { type: GET_PRODUCTS_REQ };
};
const actionGetProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
const actionGetProductfailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};
