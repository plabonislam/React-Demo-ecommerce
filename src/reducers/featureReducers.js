import { FEATURE_REQ, FEATURE_SUS } from "../constant/featureConstants";

function featureListReducer(state = { features: [] }, action) {
  switch (action.type) {
    case FEATURE_REQ: {
      return { floading: true };
    }
    case FEATURE_SUS:
      return { floading: false, features: action.payload };
    default:
      return state;
  }
}
export { featureListReducer };
