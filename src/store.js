import { createStore ,combineReducers, compose, applyMiddleware} from "redux";
import { productListReducer } from "./reducers/productListReducers";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { featureListReducer } from "./reducers/featureReducers";
import { keywordReducers, subTotalReducers } from "./reducers/keywordReducers";
const initialState={};
const reducer = combineReducers({
  productList: productListReducer,
  cartList: cartReducer,
  featureList: featureListReducer,
  keyList: keywordReducers,
  subTotalList:subTotalReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;