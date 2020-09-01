const { CART_SUS } = require("../constant/cartConstants");

const addToCart = (item) => async (dispatch) => {
  console.log("dispatch action");
  console.log(item);

  dispatch({
    type: CART_SUS,
    payload: item,
  });
};

export { addToCart };
