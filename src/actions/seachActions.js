import { KEY_WORD, SUB_TOTAL } from "../constant/searchKeyconstants";

const setKeyWord = (item) => async (dispatch) => {
  console.log("dispatch action");
  console.log(item);

  dispatch({
    type: KEY_WORD,
    payload: item,
  });
};


const setSubTotal = (carts) => async (dispatch) => {

  let t = 0;
  carts.map((item) => {
    let te = item.price;
    let n = te.replace("$", "");
    console.log(n);
    let m = parseFloat(n);

    t += m * item.quantity;
  });

  dispatch({
    type: SUB_TOTAL,
    payload: t,
  });
};
export { setKeyWord, setSubTotal };
