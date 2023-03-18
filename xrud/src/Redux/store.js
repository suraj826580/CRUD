import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./product/auth/authReducer";
import { productReducer } from "./product/reducer";
const rootReducer = combineReducers({
  productReducer,
  authReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
