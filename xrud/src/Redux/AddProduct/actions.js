import axios from "axios";
import {
  POST_ADD_PRODUCT_REQ,
  POST_ADD_PRODUCT_REQ_FAILURE,
  POST_ADD_PRODUCT_SUCCESS,
} from "./actionTypes";
const url = `http://localhost:8080/products`;
export const postProduct = (product) => (dispatch) => {
  dispatch(actionPostProductReq());
  axios
    .post(url, product)
    .then((res) => {
      dispatch(actionPostProductSuccess());
    })
    .catch((err) => {
      dispatch(actionPostProductFailure());
    });
};

const actionPostProductReq = () => {
  return { type: POST_ADD_PRODUCT_REQ };
};
const actionPostProductSuccess = () => {
  return { type: POST_ADD_PRODUCT_SUCCESS };
};
const actionPostProductFailure = () => {
  return { type: POST_ADD_PRODUCT_REQ_FAILURE };
};
