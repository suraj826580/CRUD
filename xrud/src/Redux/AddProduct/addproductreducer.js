import {
  POST_ADD_PRODUCT_REQ,
  POST_ADD_PRODUCT_REQ_FAILURE,
  POST_ADD_PRODUCT_SUCCESS,
} from "./actionTypes";

export const addProductReducer = (state, { type }) => {
  switch (type) {
    case POST_ADD_PRODUCT_REQ:
      return {
        ...state,
        isLaoding: true,
        isError: false,
      };
    case POST_ADD_PRODUCT_SUCCESS:
      return { ...state, isLaoding: false };
    case POST_ADD_PRODUCT_REQ_FAILURE:
      return { ...state, isLaoding: false, isError: true };
    default:
      return state;
  }
};
