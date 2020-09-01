import { CART_SUS } from "../constant/cartConstants";

function cartReducer(state = { carts: [] }, action) {
  switch (action.type) {
    case CART_SUS: {
     localStorage.setItem("cartStorage",JSON.stringify(action.payload));
      return { loading: false ,carts:action.payload};
    }

    default:
      return state;
  }
}
export { cartReducer };
