import { PRODUCTLIST_REQ, PRODUCTLIST_SUS, PRODUCTLIST_UPD } from "../constant/productConstant";

function productListReducer(state={products:[]},action){

    switch (action.type) {
      case PRODUCTLIST_REQ: {
        console.log("gum deeeee");
        return { loading: true };
      }
      case PRODUCTLIST_SUS:
        return { loading: false, products: action.payload };
      case PRODUCTLIST_UPD:
        return { loading: false, products: action.payload };
      default:
        return state;
    }

}
export {productListReducer};