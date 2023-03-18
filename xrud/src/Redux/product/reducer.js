import {
  GET_PRODUCTS_REQ,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
} from "./actionTypes";

const intialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQ:
      return { ...state, isLoading: true, isError: false };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
