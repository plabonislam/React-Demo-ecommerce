import data from "../data.js";
import { FEATURE_REQ, FEATURE_SUS } from "../constant/featureConstants.js";



const listFeature = () => async (dispatch) => {
  dispatch({ type: FEATURE_REQ });
  //api call
  console.log(data.products);
  const featureProduct = data.products.filter((item) => item.feature===true);
  console.log(featureProduct.length, "featureProduct");

  dispatch({
    type: FEATURE_SUS,
    payload: featureProduct,
  });
};

export { listFeature };
